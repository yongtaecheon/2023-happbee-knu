import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat_3 from '../assets/cat_3.jpeg';
import item_1 from '../assets/item/item1.png';
import item_2 from '../assets/item/item2.png';
import item_3 from '../assets/item/item3.png';
import item_4 from '../assets/item/item4.png';
import item_5 from '../assets/item/item5.png';
import item_6 from '../assets/item/item6.png';
import item_7 from '../assets/item/item7.png';
import item_8 from '../assets/item/item8.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// export default function Item(){
//     return(
//         <div className="Main">
//             <div className="Character container">
//                 <img className="cat_3" width="80%" src={cat_3}></img>
//             </div>
//             <div className="Char_Item container" >
//                 <Row xs={1} md={2} className="g-4">
//                     <Col>
//                         <Card className="card" >
//                             <Card.Img className="it" variant="top" src={item_1} />
//                         </Card>
//                         <br></br>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_2} />
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_3} />
//                         </Card>
//                         <br></br>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_4} />
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_5} />
//                         </Card>
//                         <br></br>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_6} />
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_7} />
//                         </Card>
//                         <br></br>
//                         <Card className="card">
//                             <Card.Img className="it" variant="top" src={item_8} />
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         </div>
//     );
// }

export default function Item(){
    return(
        <div className="Main">
            <div className="Character container d-flex">
                <img className="cat_3 item_cat" width="45%" src={cat_3}></img>
                {/* <h2 className="cat_talk">HI</h2> */}
                <div class="bubble b r hb">안뇽!!<br/>날 꾸며죠*^^*</div>
            </div>
            <div className="Char_Item container" >
                <Row xs={1} md={2} className="g-4">
                    <Card className="card" >
                        <Card.Img className="it" variant="top" src={item_1} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_2} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_3} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_4} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_5} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_6} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_7} />
                    </Card>
                    <Card className="card">
                        <Card.Img className="it" variant="top" src={item_8} />
                    </Card>
                </Row>
            </div>
        </div>
    );
}
