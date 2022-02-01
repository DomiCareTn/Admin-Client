import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
 
  CardText
} from "reactstrap";
import axios from "axios";
import React, { useState,useEffect } from "react";

const Reports = () => {
  const [report, setReport] = useState([])
 

  
  
    const  fetchReports= async ()=> {
      try {
        let result = await axios.get("http://192.168.11.97:3000/admin/reports")
        setReport(result.data)
      
        
      }
      catch(err){console.log(err);
      }
      fetchReports()
     
    }
   
  useEffect(() => {
 
    fetchReports()
  }, [])


  return (
    <Row>
      {report.map((rep, key) => {
       
        return (
          
         
          <Col>
            
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
            <Card>
        
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
             
            <i className="bi bi-link me-2"> </i>
           Report
          </CardTitle>
          <CardBody className="">
          <CardText style = {{fontWeight: 'bold'}}> Title: {rep.title}</CardText>
          <CardText style = {{fontWeight: 'bold'}}> Reporter: {rep.reporter}</CardText>
          <CardText style = {{fontWeight: 'bold'}}> Reported: {rep.reported}</CardText>
          <CardText style = {{fontWeight: 'bold'}}> Reason: {rep.reason}</CardText>
             
          </CardBody>
        </Card>
          </Col>
            )
          })}
    </Row>
  );
};

export default Reports;
