import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Heading from './atoms/Heading/Heading';
import SmallHead from './atoms/SmallHead/SmallHead';
import Button from './atoms/button/Button';
import Dropdown from './atoms/dropdown/Dropdown';
import Image from './atoms/Images/Image';
import Navigation from './atoms/Navigation/Navigation';
import BasicTable from './atoms/Table/Table';
import BottomNavigation from './atoms/BottomNavigation/BottomNavigation';

function App() {
  const [lotOptions,setLotOptions] = useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:8000/lot/")
    .then((response)=>{
      console.log(response.data.data);
      setLotOptions(response.data.data)
    })
  })


  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("ButtonClicked");
  }
  return (
    <div className="main">

      <Navigation />
      <Image/>
      <Heading className="big-heading"></Heading>
      <SmallHead className= "b-heading"/>
      <div className='bar'>
      
        <Dropdown/>
        <Button className="submit-button" text="SUBMIT" handleChange={handleSubmit}/>

      </div>
      <div className='table-size'>
        <center>
        <BasicTable/>

        </center>
        
      </div>
      <BottomNavigation/>
  
    </div>
  );
}

export default App;
