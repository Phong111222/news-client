import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Space, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import { LoadingOutlined, LoginOutlined, LogoutOutlined, QuestionOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import './index.scss'
const logo = 'https://us.123rf.com/450wm/serkorkin/serkorkin1506/serkorkin150600006/44659173-vector-kh%C3%A1i-ni%E1%BB%87m-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-minh-h%E1%BB%8Da.-v%C3%B2ng-tr%C3%B2n-v%C3%A0-c%C3%A1nh-k%C3%BD.-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%E1%BA%ABu.-y%E1%BA%BFu-t%E1%BB%91-thi%E1%BA%BFt-k%E1%BA%BF..jpg?ver=6'
const { Footer } = Layout;

function FooterWeb() {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="footer-container">

                <Footer
                    className="box-footer">
                    <div className="top-footer">
                        <div className="logo-footer">
                            <img src={logo} alt="" />

                        </div>
                    </div>
                    <div className="bottom-footer">
                        <p>Tại sao bạn có thể tin tưởng BBC News</p>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Space
                                size={200}
                                align="center"
                            >
                                <p>Điều khoản sử dụng</p>
                                <p>Chính sách riêng tư</p>
                                <p>Liên hệ BBC</p>
                            </Space>
                            <Space
                                size={200}
                                align="center"
                            >
                                <p>Về BBC</p>
                                <p>Cookie</p>
                                <p>AdChoices / Do Not Sell My Info</p>
                            </Space>
                        </div>
                        <p>© 2021 BBC. BBC không chịu trách nhiệm nội dung các trang ngoài. Tìm hiểu cách chúng tôi tiếp cận việc dẫn tới trang ngoài</p>
                    </div>
                </Footer>


            </div>

        </div>
    );
}

export default FooterWeb;