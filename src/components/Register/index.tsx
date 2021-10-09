import { Form, Input, Modal, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/useRedux";
import { actions } from "../../redux";
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import '../Login/index.scss'
import img from '../../assets/img/img-login.png'
export default function Register(
    {
    }
) {
    const [loading, setLoading] = useState(false);
    const show = useAppSelector(state => state.form.register)
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const handleOk = () => {

    }

    const handleCancel = () => {
        dispatch(actions.formActions.toggleRegister(false))
    }

    const buttonLoading = loading ? (
        <LoadingOutlined>Loading</LoadingOutlined>
    ) : ''
    useEffect(() => {



    }, [])

    const title = {
        email: "Email",
        password: "Mật khẩu",
        phone_number: "Số điện thoại"



    }




    return (
        <>

            <Modal
                className="modal-login-main"
                title='Thành viên Đăng Ký'
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
                        <p>Để tạo tài khoản, vui lòng điền đầy đủ thông tin bên dưới: Trường có dấu <span style={{ color: 'red' }} >*</span> là bắt buộc nhập.
                            Tài khoản đăng ký không dùng ký tự đặc biệt, dấu cách và chữ có dấu.
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
                            <Form.Item
                                name="phone_number"
                                label={title.phone_number}
                                rules={[
                                    {
                                        required: true,

                                        message: `Không được để trống ${title.phone_number}`,
                                    },
                                    {
                                        pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                                        message: `${title.phone_number} không đúng `,
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>


                        </Form>
                        <div style={{ textAlign: 'center' }}>
                            <button className="btn-login" >Đăng ký Ngay</button>
                        </div>
                        {/* <div className="wrap">
                            <p>Hoặc đăng ký</p>
                        </div> */}
                        <p className="text-register" >Bạn đã có tài khoản ? <a onClick={(e) => {
                            e.preventDefault();
                            dispatch(actions.formActions.toggleRegister(false))
                            setTimeout(() => {
                                dispatch(actions.formActions.showForm())
                            }, 500);
                        }} href="">ĐĂNG NHẬP</a>
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}