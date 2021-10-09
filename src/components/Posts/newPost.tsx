import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Row, Col } from "antd";
import Button from "antd-button-color";
import { LoadingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../../hook/useRedux";
import 'moment/locale/vi';
import moment from "moment";
import { actions } from "../../redux";

// moment.locale('he');
const img = 'https://i1-vnexpress.vnecdn.net/2021/10/02/4eda330bcd60043e5d71-163305407-1504-7509-1633136515.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=oSLccyAdnoro6_z0usrOZg'
function NewsPost({
    data
}: any) {
    const history = useHistory()
    const listPost = data.slice(1, 3)
    const dispatch = useAppDispatch()
    useEffect(() => {


    }, []);
    const formatData = (value: any) => {
        let mon = value[1];
        let day = value[2];
        if (mon < 10) {
            mon = '0' + mon;
        }
        if (day < 10) {
            day = '0' + day;
        }

        // return moment('2021-10-07:20:21-30').locale('vi').fromNow();

        return moment(`${value[0]}-${mon}-${day}:${value[3] + 7}:${value[4]}:${value[5]}`).locale('vi').fromNow();


    }
    function createMarkup(content: any) {
        return { __html: content };
    }
    return (
        <div>
            <div className="div-main-new-post ">
                <Row className="main-new-post" gutter={10} >
                    <Col className="img-news" md={12} sm={24}>
                        <div onClick={() => {
                            history.push(`/detail/${data[0].id}`);
                            dispatch(actions.newsActions.setDetail(data[0]))
                        }} className="item-img">
                            <img src={data[0].image} alt="" />

                        </div>
                    </Col>

                    <Col className="content-news" md={12} sm={24}>
                        <h3 onClick={() => {
                            history.push(`/detail/${data[0].id}`);
                            dispatch(actions.newsActions.setDetail(data[0]));

                        }} className="title-news-hot">{data[0].title}</h3>
                        <p className="short-content" dangerouslySetInnerHTML={createMarkup(data[0].content.slice(0, 100))}>
                        </p>
                        <p><i className="far fa-clock"></i> {formatData(data[0].created_at)}</p>
                        <div className="tag-count-comment">
                            <a href="">{data[0].category.title}</a>
                            <a href=""><i className="far fa-comments"></i> {data[0].views}</a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="post-bottom" gutter={12}>
                <Col className="list-posts" md={12} sm={24}>
                    <Row gutter={24}>
                        {
                            listPost.map((item: any) => {
                                return (<Col onClick={() => {
                                    history.push(`/detail/${item.id}`);

                                }} md={12} sm={24} className="item-post">
                                    <h3>{item.title}</h3>
                                    <p dangerouslySetInnerHTML={createMarkup(item.content.slice(0, 50))}></p>
                                    <a href=""><i className="far fa-comments"></i> {item.views}</a>
                                </Col>)
                            })
                        }


                    </Row>
                </Col>
                <Col onClick={() => {
                    history.push(`/detail/${data[3].id}`);

                }} className="views-posts" md={12} sm={24}>
                    <h3 className="title-view">Góc nhìn</h3>
                    <h3>{data[3].title}</h3>
                    <p dangerouslySetInnerHTML={createMarkup(data[3].content.slice(0, 50))}>
                    </p>
                    <a href=""><i className="far fa-comments"></i> {data[3].views}</a>
                </Col>
            </Row>
        </div>
    );
}

export default NewsPost;