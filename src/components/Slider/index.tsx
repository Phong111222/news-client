import { Form, Input, Modal, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/useRedux";
import { actions } from "../../redux";
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Slider(
    {
    }
) {

    useEffect(() => {



    }, [])

    const onChange = () => {

    }
    const onClickItem = () => {

    }
    const onClickThumb = () => {

    }



    return (
        <div className='slider-main'>
            <Carousel showStatus={false} showThumbs={false} emulateTouch={true} autoPlay={true} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://media.iigvietnam.com/Media/1_IIG/FolderFunc/202104/Images/onlineiigvietnamcom-2-20210412101332-e.jpg" />
                </div>
                <div>
                    <img src="https://media.iigvietnam.com/Media/1_IIG/FolderFunc/202109/Images/2artboard-12-copy-2web-online-20210922034816-e.jpg" />
                </div>
                <div>
                    <img src="https://media.iigvietnam.com/Media/1_IIG/FolderFunc/202109/Images/thi-thu-online-20210922031556-e.png" />
                </div>

            </Carousel>

        </div>
    )
}