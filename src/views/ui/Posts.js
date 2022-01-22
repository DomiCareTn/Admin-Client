import axios from "axios";
import React, { useState,useEffect } from "react";
import {

  Card,
  CardBody,
  CardTitle,
  Row,
  Button,
  Col
} from "reactstrap";


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [ss, setSS] = useState([])

  
  
    const  fetchPosts= async ()=> {
      try {
        let result = await axios.get("http://192.168.11.57:3000/admin/getposts")
        // let serviceS = await axios.get("http://192.168.11.57:3000/admin/ss")
        setPosts(result.data)
        // setSS(serviceS.data)
      
        
      }
      catch(err){console.log(err);
      }
      fetchPosts()
    
   
     
    }
   
    fetchPosts()
   
    // console.log(ss);
    
 
  useEffect(() => {
    deletePosts()
    fetchPosts()
  }, [])
    
  const deletePosts = async (id) => {
    try {
      
      await axios.delete(`http://192.168.11.57:3000/admin/postdeletedId/${id}`)
      
    }
    catch(err){console.log(err);
    } 
  
    
  }

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
         console.log(posts);
        console.log('id',post)
        return (
          

      
      
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <h5> Title : I 'am looking for a nurse</h5>
                <h5> Name :{post.serviceSeeker_id.userName}</h5>
                
                
                
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                   
                    
                    <h5> Details: { post.content}</h5>
                    <h5>City: { post.city}</h5>
                    <p>Start-Date: { post.startDate}</p>
                  <p>End-Date: {post.endDate}</p>
                  <img style={{ widht: 200, height: 400 }} src={post.file}></img>
                  <Button  color="danger" style = {{marginTop : -10,marginLeft : 400}} onClick = {deletePosts} >delete</Button>
                   
             
              
              
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
