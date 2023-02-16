import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { singlePhone } from '../services/phones';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SinglePhone() {
    const { id } = useParams();
    const [phone, setPhone] = useState('');

    useEffect(() => {
        singlePhone(id)
          .then((data) => {
            setPhone(data);
          })
      }, [id])

    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`../assets/images/${phone.imageFileName}`} alt={phone.name} />
        <Card.Body>
          <Card.Title>{phone.name}</Card.Title>
          <Card.Title>{phone.manufacturer}</Card.Title>
          <Card.Text>
{phone.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Color: {phone.color}</ListGroup.Item>
          <ListGroup.Item>Price: {phone.price}</ListGroup.Item>
          <ListGroup.Item>Screen: {phone.screen}</ListGroup.Item>
          <ListGroup.Item>Processor: {phone.processor}</ListGroup.Item>
        </ListGroup>
      </Card>
      </>

    )
}

export default SinglePhone;