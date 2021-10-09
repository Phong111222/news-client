import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Space, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import { LoadingOutlined, LoginOutlined, LogoutOutlined, QuestionOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import './index.scss'
import { useAppDispatch, useAppSelector } from "../../hook/useRedux";
import { actions } from "../../redux";
const logo = 'https://us.123rf.com/450wm/serkorkin/serkorkin1506/serkorkin150600006/44659173-vector-kh%C3%A1i-ni%E1%BB%87m-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-minh-h%E1%BB%8Da.-v%C3%B2ng-tr%C3%B2n-v%C3%A0-c%C3%A1nh-k%C3%BD.-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%E1%BA%ABu.-y%E1%BA%BFu-t%E1%BB%91-thi%E1%BA%BFt-k%E1%BA%BF..jpg?ver=6'
const { Header } = Layout;
const listMenu = [
    {
        id: 0,
        name: "Tin chính"
    },
    {
        id: 1,
        name: "Việt Nam"
    },
    {
        id: 2,
        name: "Thế giới"
    },
    {
        id: 3,
        name: "Diễn đàn"
    },
    {
        id: 4,
        name: "Kinh tế"
    },
    {
        id: 5,
        name: "Nhịp sôngs mới"
    },
    {
        id: 6,
        name: "Thể thảo"
    },
]
export default function HeaderWeb({ children }: any) {
    const history = useHistory();
    const listCategory = useAppSelector(state => state.category.listAll)
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="header-container">

                <Header
                    className="box-header">
                    <div className='menu-top'>
                        <img onClick={() => {
                            history.replace('/')
                        }} className='img-logo' src={logo} alt="" />
                        <Space>
                            <Button
                                onClick={() => {
                                    window.location.href = 'https://news-admin.vercel.app/admin'
                                }}
                                type="warning">

                                <LoginOutlined />
                                Về trang quản trị
                            </Button>
                            <Button
                                onClick={() => dispatch(actions.formActions.toggleRegister(true))
                                }
                                type="warning">
                                <QuestionOutlined />
                                Đăng Ký
                            </Button>
                        </Space>

                    </div>
                    <div className='wrap-menu'>

                    </div>
                    <div className='menu-bottom'>
                        <ul className="list-menu">
                            {
                                listCategory.map((menu: any) => {
                                    return (
                                        <li className='menu-item'>
                                            {menu.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Header>


            </div>

        </div>
    );
}
