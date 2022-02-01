import React, { useState,useEffect } from "react";
import {
 
  Card,
  CardBody,
  CardTitle,Button,Row,Col,CardText
} from "reactstrap";
import axios from "axios";


const NewRegister = () => {
  
  const [demand, setDemand] = useState([]);
  const [sp, setSp] = useState([])
  
  const fetchSp = async () => {
     
    
    let result = await axios.get("http://192.168.11.97:3000/admin/sp")
 
    
    setSp(result.data)

    
    
  
  }
  fetchSp()
  
useEffect(() => {
  fetchSp()
  demands()

    
}, [])

  const demands = async (id) => {
   
  
   
      
      try {
      
        const x = await axios.patch(`http://192.168.11.97:3000/admin/verify/${id}`)
        setDemand(x.data)
        console.log(id)
       
        
        
      }
    
      catch(err){console.log(err);
    }
    
      
    
  }

  return (
    
    <div>
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
           Registration
        </CardTitle>
 <Row>
      
          {sp.map((spp, key) => {
           
      return (
        

    
    
      <Col xs="12" md="6">
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              
              
              
              
          </CardTitle>
          <CardBody className="">
            <div className="button-group">
                 
            <img
                        src={spp.picture}
                        className="rounded-circle"
                        alt=""
                        width="45"
                        height="45"
                      />
                 <h5> FullName: {spp.firstName} {spp.lastName} </h5>
              <h5> speciality :{spp.speciality}</h5>
              <h5> city :{spp.city}</h5>
                {spp.verified === true ? <p style={{ color: "green", fontSize: 20 }}>verified  <span>&#10003;</span></p> : 
                 <div> 
                  <img style={{ width: 400, heigth: 500 }} src={spp.certificate}/>
                                  <Button color="success" style={{ marginTop: 236, marginLeft: 400 }} onClick={() => { demands(spp._id) }} >verify</Button></div>}

                 
            
            </div>
          </CardBody>
        </Card>
      </Col>
      
       
          )
      
    })}
       </Row>
</Card>
        
</div>

  );
};

export default NewRegister;
