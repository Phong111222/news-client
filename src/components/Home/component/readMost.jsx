import { Row, Col } from "antd";

function ReadMost({
    title
}) {
    const Item = ({
        stt, title
    }) => (

        <div className='itemMost'>
            <h1 className="sttText">{stt}</h1>
            <h1 className="text-title" >{title}</h1>
        </div>
    )
    return (
        <div className='postCategoryMost'>
            <div className="title-list-post">
                <h3>{title}</h3>
                <div className="title-wrap">

                </div>
            </div>
            <Row gutter={20}>
                <Col md={12} sm={24}>
                    <Item stt={1} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={2} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={3} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={4} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={5} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                </Col>
                <Col md={12} sm={24}>
                    <Item stt={6} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={7} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={8} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={9} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                    <Item stt={10} title={'Nước ngoài nói về việc Việt Nam sống chung với Covid'} />
                </Col>

            </Row>

        </div>
    );
}

export default ReadMost;