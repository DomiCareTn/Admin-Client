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

  useEffect(() => {
    async function fetchReports() {
    
      let result = await axios.get("http://192.168.11.57:3000/admin/reports")

     

  

      setReport(result.data)
      console.log(result.data);
      
      
    
    }
    fetchReports()
    console.log(report);
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
          <CardText> Reporter: {rep.reporterId}</CardText>
          <CardText> Reported: {rep.reportedId}</CardText>
          <CardText> Reason: 9{rep.reason}</CardText>
             
          </CardBody>
        </Card>
          </Col>
            )
          })}
    </Row>
  );
};

export default Reports;
