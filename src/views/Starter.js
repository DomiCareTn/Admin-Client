import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import axios from "axios";
import React, { useState, useEffect } from "react";
const Starter = () => {
  const [sp, setSp] = useState([])
  const [ss, setSS] = useState([])
  const [posts,setPosts]= useState([])
 


  useEffect(() => {
    async function fetchSp() {
    
      let result = await axios.get("http://192.168.11.57:3000/admin/sp")
      let serviceS = await axios.get("http://192.168.11.57:3000/admin/ss")
      let data = await axios.get("http://192.168.11.57:3000/admin/getposts")

  

      setSp(result.data)
      setSS(serviceS.data)
      setPosts(data.data)
      
      
    
    }
    fetchSp()
  }, [])










  const BlogData = [
    {
      image: bg1,
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg2,
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg3,
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg4,
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  ];


  return (
    <div>
          <Row>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-success text-success"
                title="Profit"
                subtitle="Service Seekers"
                earning={ss.length}
                icon="bi bi-wallet"
              />
            </Col>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-danger text-danger"
                title="Refunds"
                subtitle="Service providers"
                earning={sp.length}
                icon="bi bi-coin"
              />
            </Col>
            {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Equipement providers"
            earning="145"
            icon="bi bi-basket3"
          />
        </Col> */}
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-info text-into"
                title="Sales"
                subtitle="Service requests"
                earning="210"
                icon="bi bi-bag"
              />
            </Col>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-info text-into"
                title="Sales"
                subtitle="Service Offers"
                earning={posts.length}
                icon="bi bi-bag"
              />
            </Col>







          </Row>
          
        
        



      
      {/***Top Cards***/}
      
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}


export default Starter;
