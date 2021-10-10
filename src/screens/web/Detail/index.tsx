import { Col, Row } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hook/useRedux";
import postService from "../../../service/posts/postService";
import './index.scss'
export default function Detail({ children }: any) {

    const params: any = useParams();
    const listNews = useAppSelector(state => state.news.listAll)
    const listTop = useAppSelector(state => state.news.listTop)
    const [data, setData]: any = useState();
    const [dataOther, setDataOther] = useState([])
    const history = useHistory()
    useEffect(() => {


        const fetchData = async () => {
            const dataNew = await [...listNews.filter((item: any) => item.id === params.id)];
            const dataNew1 = await [...listNews.filter((item: any) => item.id !== params.id)];
            setDataOther(dataNew1.slice(0, 3))
            setData(dataNew[0])
            postService.putVies(params.id)

        }
        fetchData()
    }, [params.id])
    const formatData = (value: any) => {
        let mon = value[1];
        let day = value[2];
        if (mon < 10) {
            mon = '0' + mon;
        }
        if (day < 10) {
            day = '0' + day;
        }

        // return moment('2021-10-07:20:21-30').locale('vi').fromNow();

        return moment(`${value[0]}-${mon}-${day}:${value[3] + 7}:${value[4]}:${value[5]}`).locale('vi').fromNow();


    }
    function createMarkup(content: any) {
        return { __html: content };
    }
    return (
        <>
            {
                data && (
                    <div className="detail-main">
                        <Row gutter={100}>

                            <Col md={16} sm={24} >
                                <h3 className="title-text">{data.title}</h3>
                                <p>{formatData(data.created_at)}</p>
                                <img className="img-data " src={data.image} alt="" />
                                <div className="content" dangerouslySetInnerHTML={createMarkup(data.content)}>

                                </div>
                                <p className="text-author">Tác già: {`${data.user.firstname} ${data.user.lastname}`} </p>


                            </Col>
                            <Col md={8} sm={24}>
                                <h3 className="text-relate-to">Tin liên quan</h3>
                                <hr />
                                <div className="list-news">
                                    {
                                        dataOther.map((item: any) => {
                                            return (
                                                <div onClick={() => {
                                                    history.push(`/detail/${item.id}`)
                                                }} className="news-item">
                                                    <img className="img-news" src={item.image} alt="" />
                                                    <p className="text-news">{item.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr />
                                <h3 className="text-relate-to">Đọc nhiều nhất</h3>
                                <div className="list-top">
                                    {
                                        listTop.map((item: any, index) => {
                                            return (
                                                <div className='item-top'>
                                                    <p className="index">{index + 1}</p>
                                                    <p className="title">{item.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
            }
        </>
    );
}