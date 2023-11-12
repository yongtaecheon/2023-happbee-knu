import React, { useState, useEffect } from 'react';
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
import catem_1 from '../assets/cat_item/cat_item1.png';
import catem_2 from '../assets/cat_item/cat_item2.png';
import catem_3 from '../assets/cat_item/cat_item3.png';
import catem_4 from '../assets/cat_item/cat_item4.png';
import catem_5 from '../assets/cat_item/cat_item5.png';
import catem_6 from '../assets/cat_item/cat_item6.png';
import catem_7 from '../assets/cat_item/cat_item7.png';
import catem_8 from '../assets/cat_item/cat_item8.png';
import cat_1 from '../assets/cat_1.jpeg';
import cat_2 from '../assets/cat_2.jpeg';
import cat_4 from '../assets/cat_4.jpeg';
import cat_5 from '../assets/cat_5.jpeg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Item() {
    const [happy, setHappy] = useState(130);
    const [cat, setCat] = useState(cat_3);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('/cat'); // Update the URL based on your Flask server
          const score = await response.json();
          setHappy(score);
          setCat(change_cat(happy))
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    function change_cat(n) {
        if (n <= 50) return cat_1;
        else if (n <= 100) return cat_2;
        else if (n <= 150) return cat_3;
        else if (n <= 200) return cat_4;
        else return cat_5;
    }
    
    const [selectedItem, setSelectedItem] = useState(cat_3);
    const [selelctedCatem, setSelectedCatem] = useState(null);

    const items = [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8]
    const catem = [catem_1, catem_2, catem_3, catem_4, catem_5, catem_6, catem_7, catem_8]
    
    const handleCardClick = (itemIndex) => {
        setSelectedItem(catem[itemIndex]);
        setSelectedCatem(catem[itemIndex])
    };

    return(
        <div className="Main d-flex">
            <div className="Character container">
                <img className="cat_3" width="80%" src={selectedItem}></img>
            </div>
            <div className="Char_Item container" >
                <Row xs={1} md={2} className="g-4">
                    {items.map((item, index) => (
                        <Col key={index}>
                            <Card onClick={() => handleCardClick(index)}>
                                <Card.Img variant="top" src={items[index]} />
                            </Card>
                            <br></br>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
