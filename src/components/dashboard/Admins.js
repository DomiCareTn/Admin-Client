
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import axios from "axios";
import React, { useState,useEffect } from "react";

const FeedData = [

  {
    title: "New user registered.",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
];


const Admins = () => {
  const [admin, setadmins] = useState([])
  useEffect(() => {
    async function fetchSp() {
    
      let result = await axios.get("http://192.168.11.97:3000/admin/admins")
      
      setadmins(result.data)
     
    }
    fetchSp()
  
    
  }, [])
  
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Admins</CardTitle>
        
        <ListGroup flush className="mt-4">
          {admin.map((ad, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color="success"
              >
                <i className={FeedData.icon}></i>
              </Button>
              {ad.username}
              <small className="ms-auto text-muted text-small">
                {ad.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Admins;
