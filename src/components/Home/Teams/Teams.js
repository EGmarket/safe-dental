import React, { useEffect, useState } from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import Forms from "../../Common/Form/Forms";
import Team from "../Team/Team";

const Teams = () => {
  const [members,setMembers] = useState([]);

  useEffect(()=>{
      fetch('./team.json')
      .then(res => res.json())
      .then(data => setMembers(data))
  },[])

return (
  <div>
    <div className="container mt-3">
      <div className="row mx-5">
        <div className="col-md-8 mt-4">
          <div>
            <h4 className="text-primary fs-4 mt-4">Comitted To</h4>
            <h2 className="text-success fs-1 fw-bold">Satisfaction</h2>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <button type="button" class="btn btn-info fw-bold text-white fs-3">
            Awesome Members
          </button>
        </div>
      </div>
      <Row xs={1} md={4} lg={4}>
      {
          members.slice(0,4).map(member => <Team
          
            key = {member.key}
            member = {member}
          >

          </Team>)
        }
      </Row>

      </div>
    </div>
  
);
};

export default Teams;
