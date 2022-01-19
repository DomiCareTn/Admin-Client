import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

import axios from "axios";
import React, { useState,useEffect } from "react";


const Users = () => {
  const [sp, setSp] = useState([])


  useEffect(() => {
    async function fetchSp() {
    
      let result = await axios.get("http://192.168.1.16:3000/admin/sp")

      // let users= await axios.get()

  

      setSp(result.data)
      
      
    
    }
    fetchSp()
  }, [])
  return (
    <div>
      
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((spp, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={spp.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{spp.firstName}</h6>
                        <span className="text-muted">{spp.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{spp.lastName}</td>
                  <td>
                    {spp.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : spp.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{spp.weeks}</td>
                  <td>{spp.budget}</td>
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
