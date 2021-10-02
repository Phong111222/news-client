import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Row, Col } from "antd";
import Button from "antd-button-color";
import { LoadingOutlined } from '@ant-design/icons';
const img = 'https://i1-vnexpress.vnecdn.net/2021/10/02/4eda330bcd60043e5d71-163305407-1504-7509-1633136515.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=oSLccyAdnoro6_z0usrOZg'
function NewsPost({

}) {
    useEffect(() => {


    }, []);
    return (
        <div>
            <div className="div-main-new-post">
                <Row className="main-new-post" gutter={10} >
                    <Col className="img-news" md={12} sm={24}>
                        <div className="item-img">
                            <img src={img} alt="" />

                        </div>
                    </Col>

                    <Col className="content-news" md={12} sm={24}>
                        <h3 className="title-news-hot">Chốt phương án đi lại ở TP HCM</h3>
                        <p className="short-content">
                            Từ ngày 5/10, xe buýt, taxi, ôtô hợp đồng dưới 9 chỗ ứng dụng công nghệ tại thành phố được hoạt động trở lại với số lượng hạn chế; xe ôm tiếp tục dừng.

                            Nội dung đề cập trong hướng dẫn ...
                        </p>
                        <p><i class="far fa-clock"></i> Một giờ trước</p>
                        <div className="tag-count-comment">
                            <a href="">Thời sự</a>
                            <a href=""><i class="far fa-comments"></i> 24</a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="post-bottom" gutter={12}>
                <Col className="list-posts" md={12} sm={24}>
                    <Row gutter={24}>
                        <Col md={12} sm={24} className="item-post">
                            <h3>Thủ tướng yêu cầu xác minh việc đẩy giá kit xét nghiệm</h3>
                            <p>Các cơ quan chức năng được yêu cầu vào cuộc kiểm tra, làm rõ việc giá kit xét nghiệm bị đẩy lên cao và xử lý nghiêm nếu phát hiện vi phạm.</p>
                            <a href=""><i class="far fa-comments"></i> 24</a>
                        </Col>
                        <Col md={12} sm={24} className="item-post">
                            <h3>Người TP HCM 'kẹt' ở tỉnh muốn trở về cần làm gì?</h3>
                            <p>Người dân TP HCM đang ở tỉnh thành muốn trở về phải gửi đơn qua email Sở Giao thông Vận tải, nêu rõ lý do, kế hoạch đi lại để được xem xét, giải quyết trong 48 giờ.</p>
                            <a href=""><i class="far fa-comments"></i> 24</a>
                        </Col>
                    </Row>
                </Col>
                <Col className="views-posts" md={12} sm={24}>
                    <h3 className="title-view">Góc nhìn</h3>
                    <h3>Kiệt sức</h3>
                    <p>Góc nhìn
                        Kiệt sức
                        Tại cuộc họp nhóm lâm sàng ở bệnh viện, sếp hỏi tôi: 'Cô có ổn không?'. Tôi bất ngờ trong vài giây rồi bật khóc.</p>
                    <a href=""><i class="far fa-comments"></i> 24</a>

                </Col>
            </Row>
        </div>
    );
}

export default NewsPost;