import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Layout, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import { LoadingOutlined } from '@ant-design/icons';
import HeaderWeb from '../../antComponent/Header'
function Home() {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="home-container">
                <Layout>
                    <HeaderWeb />
                </Layout>
            </div>

        </div>
    );
}

export default Home;