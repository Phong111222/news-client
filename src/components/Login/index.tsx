import { Form, Input, Modal, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/useRedux";
import { actions } from "../../redux";
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './index.scss'
import img from '../../assets/img/img-login.png'
export default function Login(
    {
    }
) {
    const [loading, setLoading] = useState(false);
    const show = useAppSelector(state => state.form.show)
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const handleOk = () => {

    }

    const handleCancel = () => {
        dispatch(actions.formActions.closeForm())
    }

    const buttonLoading = loading ? (
        <LoadingOutlined>Loading</LoadingOutlined>
    ) : ''
    useEffect(() => {



    }, [])

    const title = {
        email: "Email",
        password: "Mật khẩu",



    }




    return (
        <>

            <Modal
                className="modal-login-main"
                title='Thành viên Đăng nhập'
                visible={show}
                onOk={handleOk}
                style={{ minWidth: '70vw' }}
                onCancel={handleCancel}
                footer={false}
                forceRender
            >
                <div className="form-body" >
                    <div className="form-left">
                        <p>Đăng nhập tài khoản IIG VIET NAM</p>
                        <p>Sử dụng tài khoản IIG VIET NAM bằng email hoặc tài khoản Google, Facebook
                        </p>
                        <img className="img-login" src={img} alt="" />
                    </div>
                    <div className="form-right">
                        <Form
                            form={form}
                            layout="vertical"
                            // layout="basic"
                            name="basic"
                            initialValues={{ modifier: 'public' }}
                        >
                            <Form.Item
                                name="email"
                                label={title.email}
                                rules={[
                                    {
                                        required: true,
                                        message: `Không được để trống ${title.email}`,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="pasword"
                                label={title.password}
                                rules={[
                                    {
                                        required: true,
                                        message: `Không được để trống ${title.password}`,
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>



                        </Form>
                        <div style={{ textAlign: 'center' }}>
                            <button className="btn-login" >Đăng nhập</button>
                        </div>
                        <div className="wrap">
                            <p>Hoặc đăng ký</p>
                        </div>
                        <p className="text-register" >Bạn chưa có tài khoản ? <a onClick={(e) => {
                            e.preventDefault();
                            dispatch(actions.formActions.closeForm());
                            setTimeout(() => {

                                dispatch(actions.formActions.toggleRegister(true));
                            }, 500);

                        }} href="">ĐĂNG KÝ</a>
                            <p className="forget-password">Quên mật khẩu ?</p>
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}