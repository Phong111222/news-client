import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Form, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import '../Login/Login.scss'
import { LoadingOutlined } from '@ant-design/icons';


function Register() {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    useEffect(() => {


    }, []);

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const openNotification = () => {
        const args = {
            message: 'Đăng Ký Admin',
            description: 'Xin mời đăng ký',
            duration: 2,
        };
        notification.success(args);
    };
    const onFinish = (values) => {


        const fecthAuth = async () => {
            setLoading(true)
            try {


                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                history.replace('/');
                message.success('Đăng nhập thành công');
            } catch (error) {

                setTimeout(() => {
                    setLoading(false);
                }, 1000);


            }
        };
        fecthAuth();
        // dispatch(actions.authActions.clickAdd('Akkk'));
        // history.replace('/admin')
    };

    return (
        <div>
            <div className="Home">

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h2>Đăng Ký</h2>

                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}

                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input type="email" />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone_number"
                                rules={[
                                    {
                                        required: true,
                                        type: 'phone_number',
                                        message: 'Please input your phone_number!',
                                    },
                                ]}
                            >
                                <Input type="phone_number" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Spin indicator={antIcon}
                                    spinning={loading}>
                                    <Button type="primary" htmlType="submit">
                                        Đăng Ký
                                    </Button>
                                </Spin>

                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;