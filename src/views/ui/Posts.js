import React, { useState,useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import axios from "axios";

const Posts = () => {
  // const [cSelected, setCSelected] = useState([]);
  // const [rSelected, setRSelected] = useState(null);
  const [posts,setPosts]= useState([])

  // const onRadioBtnClick = (rSelected) => {
  //   setRSelected(rSelected);
  // };
  useEffect(async() => {
    try {
      const result = await axios.get("http://192.168.11.130:3000/posts/getposts")
      setPosts(result.data)
      
    }
    catch(err){console.log(err)}
  },[])

  // const onCheckboxBtnClick = (selected) => {
  //   const index = cSelected.indexOf(selected);
  //   if (index < 0) {
  //     cSelected.push(selected);
  //   } else {
  //     cSelected.splice(index, 1);
  //   }
  //   setCSelected([...cSelected]);
  // }
;

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      
      
      {posts.map((post, key) => {
        return (
          

      
      <Row>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Posts
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                    <h1>{ post.title}</h1>
                    <h1>{ post.content}</h1>
                    <h1>{ post.city}</h1>
                    <h1>no data</h1>
             
              
              
              </div>
            </CardBody>
          </Card>
        </Col>
        
          </Row>
            )
        
          })}
          
          





      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Posts;
