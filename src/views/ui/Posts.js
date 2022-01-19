import axios from "axios";
import React, { useState,useEffect } from "react";
import {
  // Button,
  // ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// import axios from "axios";

const Posts = () => {
  // const [cSelected, setCSelected] = useState([]);
  // const [rSelected, setRSelected] = useState(null);
  const [posts,setPosts]= useState([])

  // const onRadioBtnClick = (rSelected) => {
  //   setRSelected(rSelected);
  // };
  
  useEffect(() => {
    async function fetchPosts() {
    
      let result = await axios.get("http://192.168.1.16:3000/admin/getposts")

      // let users= await axios.get()

  

      setPosts(result.data)
      
      
    
    }
    fetchPosts()
  }, [])
    

  return (
    <div>
      <h1>Posts</h1>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
      
      {posts.map((post, key) => {
        console.log('id',post._id)
        return (
          

      
      
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <h5> Title :{ post.title}</h5>
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                   
                    {/* <h1>{ post.firsName}</h1> */}
                    <h5> Details:{ post.content}</h5>
                    <h5>City:{ post.city}</h5>
                   
             
              
              
              </div>
            </CardBody>
          </Card>
        </Col>
        
         
            )
        
      })}
         </Row>
          
          





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
