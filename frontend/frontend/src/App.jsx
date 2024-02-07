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
  //lot options
  const [lotOptions,setLotOptions] = useState([]);
  //selection lot
  const[selectedLot,setSelectedLot]= useState("");
  //data
  const[data,setData]= useState([]);

//For Lots listing
  useEffect(()=>{
    axios
    .get("http://localhost:8000/lot/")
    .then((response)=>{
      //lotdata creation
      const lotdata=response.data.data[0]
      const options= lotdata.map((lot)=>(
        {
          label:lot.name,
          value:lot.id
        }
      )
      )
      setLotOptions(options)
      //console.log(lotOptions);
    })
    .catch(error => console.error("The error is:",error))
  },[])

  const handleLotChange=(selectedValue)=>{
    setSelectedLot(selectedValue)
  }

  const handleButtonClick=(e) =>{
    e.preventDefault();
    axios
    .get(`http://localhost:8000/data/lotdata/${selectedLot}/`)
    .then((response)=>{
      //since we have to get in to find the array having which all components
      const lotData=response.data.data[0];
      // console.log(lotData)
      //inorder to set the data retrieved into data
      setData(lotData)
      console.log(data)
    })
    .catch(error =>console.error ("The error is:",error))
  }

  return (
    <div className="main">

      <Navigation />
      <Image/>
      <Heading className="big-heading"></Heading>
      <SmallHead className= "b-heading"/>
      <div className='bar'>
      
        <Dropdown
        lotvalue= {selectedLot}
        onChange={handleLotChange}
        options={lotOptions}
        />
        <Button 
        className="submit-button" 
        text="SUBMIT" 
        handleSubmit={handleButtonClick}
        />

      </div>
      <div className='table-size'>
        <center>
        {data && <BasicTable data = {data}/>}
        </center>
        </div>
        
      <BottomNavigation/>
  
    </div>
  );
}

export default App;
