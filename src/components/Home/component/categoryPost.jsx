import { Row, Col } from "antd";
const img = 'https://i1-vnexpress.vnecdn.net/2021/10/02/4eda330bcd60043e5d71-163305407-1504-7509-1633136515.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=oSLccyAdnoro6_z0usrOZg'
const img1 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/15E4D/production/_120677698_gettyimages-467096068.jpg'
const img3 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/DE76/production/_120705965_gettyimages-1222020778.jpg'
const img4 = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/C47D/production/_120410305_gettyimages-1233346550.jpg'
function CategoryPost({
    title
}) {

    return (
        <div className='postCategoryMain'>
            <div className="title-list-post">
                <h3>{title}</h3>
                <div className="title-wrap">

                </div>
            </div>
            <Row gutter={12}>
                <Col md={6} sm={12} className="item-post">
                    <img className="img-post" src={img} alt="" />
                    <h3>Greta Thunberg: 'Không có hành tinh B, không có hành tinh blah blah blah!'</h3>
                    <p className="date-post">29 tháng 9 năm 2021</p>
                </Col>
                <Col md={6} sm={12} className="item-post">
                    <img className="img-post" src={img1} alt="" />
                    <h3>Greta Thunberg: 'Không có hành tinh B, không có hành tinh blah blah blah!'</h3>
                    <p className="date-post">29 tháng 9 năm 2021</p>
                </Col>
                <Col md={6} sm={12} className="item-post">
                    <img className="img-post" src={img3} alt="" />
                    <h3>Greta Thunberg: 'Không có hành tinh B, không có hành tinh blah blah blah!'</h3>
                    <p className="date-post">29 tháng 9 năm 2021</p>
                </Col>
                <Col md={6} sm={12} className="item-post">
                    <img className="img-post" src={img4} alt="" />
                    <h3>Greta Thunberg: 'Không có hành tinh B, không có hành tinh blah blah blah!'</h3>
                    <p className="date-post">29 tháng 9 năm 2021</p>
                </Col>
            </Row>
        </div>
    );
}

export default CategoryPost;