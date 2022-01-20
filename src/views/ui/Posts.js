import axios from "axios";
import React, { useState,useEffect } from "react";
import {

  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [ss, setSS] = useState([])

  
  useEffect(() => {
    async function fetchPosts() {
    
      let result = await axios.get("http://192.168.11.57:3000/admin/getposts")
      let serviceS = await axios.get("http://192.168.11.57:3000/admin/ss")

 

      setSS(serviceS.data)

      setPosts(result.data)
    
      
      
      
    
    }
    fetchPosts()
  }, [])
    

  return (
    <div>
      <h1>Posts</h1>
   
      <Row>
      
      {posts.map((post, key) => {
        console.log('id', post._id)
        console.log(posts.serviceSeeker_id);
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
      
    </div>
  );
};

export default Posts;
