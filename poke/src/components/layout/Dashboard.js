import React from 'react';
import Pic from './Intro.png';
import { useNavigate } from "react-router-dom";


 const Dashboard = () => {
  
  let navigate = useNavigate();

  function handleClick() {
      navigate("/quiz");
  }
  
    return (
      <div className="board">
        <img  src={Pic} style = { {width :"350px" ,height:"350px"} } alt="Intro"/>
        <button className = "btn btn-warning " type="button" onClick={handleClick}>
        <h3> Play!! </h3>
        </button>
      </div>
    );

}

export default Dashboard;