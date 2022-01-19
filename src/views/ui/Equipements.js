import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
 
  Button,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import React, { useState,useEffect } from "react";



const Equipements = () => {
  const [equips, setEquips] = useState([])
  useEffect(() => {
    async function fetchEquips() {
    
      let result = await axios.get("http://192.168.1.16:3000/admin/equipement")

      // let users= await axios.get()

  

      setEquips(result.data)
      
      
    
    }
    fetchEquips()
  }, [])


  return (
    


    <div>
      
      <h5 className="mb-3">Equipements</h5>
      <Row>
        {equips.map((equip, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
              <Card>
      <CardImg alt="Card image cap" src={equip.picture} />
      <CardBody className="p-4">
        <CardTitle tag="h5">Machine Name: {equip.name}</CardTitle>
        <CardSubtitle> reference: {equip.reference}</CardSubtitle>
        <CardText className="mt-3"> Description : {equip.description}</CardText>
        <CardText className="mt-3"> Price: {equip.price}</CardText>
        <Button> delete </Button>
      </CardBody>
    </Card>
  )
  
          </Col>
        ))}
      </Row>
     
      
    </div>
  )
}

export default Equipements;
