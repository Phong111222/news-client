import { useEffect, useState } from "react";
import CategoryPost from "../../components/Posts/CategoryPost";
import NewsPost from "../../components/Posts/newPost";
import ReadMost from "../../components/Posts/readPost";
import Slider from "../../components/Slider";
import { useAppDispatch } from "../../hook/useRedux";
import { actions } from "../../redux";
import categoryService from "../../service/category/categoryService";
import postService from "../../service/posts/postService";
import './index.scss'

export default function LayoutHome({ children }: any) {
    const dispatch = useAppDispatch()
    const [dataNews, setDataNews] = useState();
    const [dataCategory, setDateCategory] = useState([]);
    const [dataTop, setDateTop] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response: any = await postService.getAll();
            const { posts } = response;
            dispatch(actions.newsActions.setAll(posts))
            setDataNews(posts)
        }
        const fetchDataTop = async () => {
            const response: any = await postService.GetTop();
            const { posts } = response;
            dispatch(actions.newsActions.setTop(posts))
            setDateTop(posts)
        }
        const fetchDataCategory = async () => {
            const response: any = await categoryService.getAll();
            const { categories } = response;
            setDateCategory(categories);
            dispatch(actions.categoryActions.setAll(categories))
        }
        fetchDataTop()
        fetchData()
        fetchDataCategory()

    },
        [])
    return (
        <div>
            {/* <Slider /> */}
            {
                dataNews && dataCategory && (
                    <div>
                        <NewsPost data={dataNews} />
                        <div style={{ padding: '10px 100px' }}>
                            {

                                dataCategory.map((item: any) => {

                                    return (
                                        item.number_of_posts > 0 ?
                                            <CategoryPost data={item} title={item.title} /> : <></>

                                    )
                                })
                            }
                            {

                                <ReadMost data={dataTop} title={'Đọc nhiều nhất'} />
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

