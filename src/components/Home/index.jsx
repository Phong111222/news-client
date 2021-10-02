import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import NewsPost from './component/newPost';
import ReadMost from './component/readMost'
import CategoryPost from './component/categoryPost'
import './home.scss'
const { Content } = Layout;
function Home() {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="home-container">
                <NewsPost />
                <CategoryPost title={'Thế giới'} />
                <CategoryPost title={'Việt Nam'} />
                <CategoryPost title={'Covid'} />
                <CategoryPost title={'Thể Thảo'} />
                <CategoryPost title={'Tuổi trẻ'} />
                <CategoryPost title={'Chính trị'} />
                <CategoryPost title={'Sức khoẻ'} />
                <ReadMost title={'Đọc nhiều nhất'} />
            </div>

        </div>
    );
}

export default Home;