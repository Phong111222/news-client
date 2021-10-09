import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function ReadMost({
    title, data
}: any) {
    const history = useHistory()
    const Item = ({
        stt, item
    }: any) => (

        <div onClick={() => {
            history.push(`/detail/${item.id}`)
        }} className='itemMost'>
            <h1 className="sttText">{stt}</h1>
            <h1 className="text-title" >{item.title}</h1>
        </div>
    )
    const [listLeft, setListLeft] = useState(data.slice(0, 4))
    const [listRight, setListRight] = useState(data.slice(4, 8))
    useEffect(() => {


    }, [])
    return (
        <div className='postCategoryMost'>
            <div className="title-list-post">
                <h3>{title}</h3>
                <div className="title-wrap">

                </div>
            </div>
            <Row gutter={20}>
                <Col md={12} sm={24}>
                    {
                        listLeft.map((item: any, index: any) => {
                            return (
                                <Item stt={index + 1} item={item} />
                            )

                        })
                    }

                </Col>
                <Col md={12} sm={24}>
                    {
                        listRight.map((item: any, index: any) => {
                            return (
                                <Item stt={index + 5} item={item} />)

                        })
                    }

                </Col>

            </Row>

        </div>
    );
}

export default ReadMost;