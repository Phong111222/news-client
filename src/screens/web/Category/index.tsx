import { Col, Row } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hook/useRedux";
import postService from "../../../service/posts/postService";
import './index.scss'
export default function Category({ children }: any) {

    const params: any = useParams();
    const listNews = useAppSelector(state => state.news.listAll)
    const lisCategory = useAppSelector(state => state.category.listAll)
    const [dataPost, setDataPost] = useState([])
    const [data, setData]: any = useState();
    const history = useHistory()
    useEffect(() => {


        const fetchData = async () => {

            const newData = [...lisCategory.filter((item: any) => item.id == params.id)]
            const newsData1 = [...listNews.filter((item: any) => item.category.id === params.id)]
            setData(newData[0]);
            setDataPost(newsData1)
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
                    <div className="category-main">
                        <h1 className="title">{data.title}</h1>
                        {dataPost.length > 0 ?
                            (<div className="list-category">
                                {
                                    dataPost.map((item: any) => {
                                        return (
                                            <div onClick={() => {
                                                history.push(`/detail/${item.id}`)
                                            }} className="category-item">
                                                <img className="img-post" src={item.image} alt="" />
                                                <p className='text-title'>{item.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>)
                            : ('Không có bài viết')
                        }
                    </div>
                )
            }
        </>
    );
}