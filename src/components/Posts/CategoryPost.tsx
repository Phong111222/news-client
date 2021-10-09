
import { Row, Col } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "../../hook/useRedux";
import postService from "../../service/posts/postService";
const img = 'https://i1-vnexpress.vnecdn.net/2021/10/02/4eda330bcd60043e5d71-163305407-1504-7509-1633136515.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=oSLccyAdnoro6_z0usrOZg'
const img1 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/15E4D/production/_120677698_gettyimages-467096068.jpg'
const img3 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/DE76/production/_120705965_gettyimages-1222020778.jpg'
const img4 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/C47D/production/_120410305_gettyimages-1233346550.jpg'
function CategoryPost({
    title, data
}: any) {

    const dataNews = useAppSelector(state => state.news.listAll);
    const history = useHistory()
    const [dataPostCategory, setDataPostCategory] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const newData: any = [...dataNews.filter((item: any) => item.category.id == data.id)];
            setDataPostCategory(newData.slice(0, 4))
        }

        fetchData();
    }, [])
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
    return (
        <div className='postCategoryMain'>
            <div className="title-list-post">
                <h3>{title}</h3>
                <div className="title-wrap">

                </div>
            </div>
            <Row gutter={12}>
                {
                    dataPostCategory.map((item: any) => {
                        return (<Col onClick={() => {
                            history.push(`/detail/${item.id}`);
                        }} md={6} sm={12} className="item-post">
                            <img className="img-post" src={item.image} alt="" />
                            <h3>{item.title}</h3>
                            <p className="date-post">{formatData(item.created_at)}</p>
                        </Col>)
                    })

                }

            </Row>
        </div>
    );
}

export default CategoryPost;