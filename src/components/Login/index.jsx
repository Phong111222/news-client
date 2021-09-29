import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Form, Input, message, notification, Spin } from "antd";
import Button from "antd-button-color";
import './Login.scss'
import { LoadingOutlined } from '@ant-design/icons';


function Login() {
  let history = useHistory();
  let token = null;
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    // if (token != null) {
    //   history.push('/admin')
    // }
    // else {
    //   history.push('/');
    //   console.log("test");
    //   openNotification();
    // }
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
      message: 'Đăng nhập',
      description: 'Xin mời đăng nhập',
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
            <h2>Login</h2>

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
                    Login
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

export default Login;