import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import bann from "../../assets/images/logos/inactive.jpg"
import unbann from "../../assets/images/logos/active.jpg"



import axios from "axios";
import React, { useState,useEffect } from "react";


const Users = () => {
  const [sp, setSp] = useState([])
  const [ss, setSS] = useState([])
 



  const fetchSp = async () => {
    try {
      
        let result = await axios.get("http://192.168.11.57:3000/admin/sp")
        
        setSp(result.data)
        
        
    }
    catch(err){console.log(err)}
     
      
    
    }
  fetchSp()
  
  const fetchss = async () => {
    try {
      
        let serviceS = await axios.get("http://192.168.11.57:3000/admin/ss")
        
        setSS(serviceS.data)
        
        
    }
    catch(err){console.log(err)}
     
      
    
    }
    fetchss()
    
  useEffect(() => {
    fetchSp()
    fetchss()
    banedUser()
    unbanUser()
    banedUserSS()
    unbanUserSS()
      
  }, [])
  const banedUser = async (id) => {
    console.log("first");
    
    try {
      console.log(id);
      await axios.patch(`http://192.168.11.57:3000/admin/banned/${id}`)
      
      
      
    }
    catch(err){console.log(err);
    }
    
  }
  const unbanUser = async (id) => {
    try {
      
      await axios.patch(`http://192.168.11.57:3000/admin/unbanned/${id}`)
    }
    catch(err){console.log(err);
    } 
    
  }
  const banedUserSS = async (id) => {
    console.log("first");
    
    try {
      console.log(id);
      await axios.patch(`http://192.168.11.57:3000/admin/bannedSS/${id}`)
      
      
      
    }
    catch(err){console.log(err);
    }
    
  }
  const unbanUserSS = async (id) => {
    try {
      
      await axios.patch(`http://192.168.11.57:3000/admin/unbannedSS/${id}`)
      setSS(ss)
    }
    catch(err){console.log(err);
    } 
    
  }
  
  
  


  return (
    <div>
      
      <Card>
        <CardBody>
          <CardTitle tag="h5">Users</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
           Service Providers
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Username</th>
                <th>Type</th>

                <th>Status</th>
                <th>City</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((spp, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={spp.picture}
                        className="rounded-circle"
                        alt=""
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{spp.firstName}</h6>
                        <span className="text-muted">{spp.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{spp.type}</td>
                  <td>
                    {spp.banned === true? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : spp.banned === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{spp.city}</td>
                  <td>{spp.phoneNumber}</td>
                  
                  <td> {spp.banned === false ? <img src={bann} onClick={() => {
                  
                    console.log(spp)
                    banedUser(spp._id)
                   
                  }} width="50" height="50" />
                    : <img src={unbann} onClick={() => {
                    console.log(spp)
                    unbanUser(spp._id)
                  }} width="45" height="45" />}
                  
                  
                  </td>
                   
                  
                 
                  </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>


      <Card>
        <CardBody>
          <CardTitle tag="h5">Users</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
           Service Seekers
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Username</th>
                <th>Type</th>

                <th>Status</th>
                <th>City</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {ss.map((s, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={s.avatar}
                        className="rounded-circle"
                        alt=""
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{s.firstName}</h6>
                        <span className="text-muted">{s.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{s.type}</td>
                  <td>
                    {s.banned === true ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : s.banned === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{s.city}</td>
                  <td>{s.phoneNumber}</td>
                  <td> {s.banned === false ? <img src={bann} onClick={() => {
                  
                  console.log(s)
                  banedUserSS(s._id)
                 
                }} width="50" height="50" />
                  : <img src={unbann} onClick={() => {
                  console.log(s)
                  unbanUserSS(s._id)
                }} width="45" height="45" />}
                
                
                </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Users;
