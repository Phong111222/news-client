import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
<<<<<<< HEAD
import NewsPost from './component/newPost';
import ReadMost from './component/readMost'
import CategoryPost from './component/categoryPost'
import './home.scss'
const { Content } = Layout;
=======
import { LoadingOutlined } from '@ant-design/icons';
import HeaderWeb from '../../antComponent/Header'
>>>>>>> 688cf6362c3fadcf740a2650744c94444cf962b2
function Home() {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="home-container">
<<<<<<< HEAD
                <NewsPost />
                <CategoryPost title={'Thế giới'} />
                <CategoryPost title={'Việt Nam'} />
                <CategoryPost title={'Covid'} />
                <CategoryPost title={'Thể Thảo'} />
                <CategoryPost title={'Tuổi trẻ'} />
                <CategoryPost title={'Chính trị'} />
                <CategoryPost title={'Sức khoẻ'} />
                <ReadMost title={'Đọc nhiều nhất'} />
=======
                <Layout>
                    <HeaderWeb />
                </Layout>
>>>>>>> 688cf6362c3fadcf740a2650744c94444cf962b2
            </div>

        </div>
    );
}

export default Home;