import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function PhoneList() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((err) => console.log("Error getting the phones", err));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <CardGroup>
      {phones.map((phone) => {
        return (
          <Card key={phone.id}>
            <Card.Img
              variant="top"
              src={`../assets/images/${phone.imageFileName}`}
              alt={phone.name}
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/phones/${phone.id}`} className="button">
                  {phone.name}
                </Link>
              </Card.Title>
            </Card.Body>
            <img />
            <h2></h2>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default PhoneList;
