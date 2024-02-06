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
  const[selectedLot,setSelectedLot]= useState([]);
  //data lot
  const[data,setData]= useState([]);

//For Lots listing
  useEffect(()=>{
    axios
    .get("http://localhost:8000/lot/")
    .then((response)=>{
      setLotOptions(response.data.data[0])
      // console.log(lotOptions);
    })
  })


  //for selection of Lot
  // useEffect(()=>{
  //   axios
  //   .get("http://localhost:8000/lot/label/")
  //   .then((response)=>{
  //     setSelectedLot(response.data.data[0])
  //     console.log(selectedLot);
  //   })
  // })

  // for data retrieval
  useEffect(()=>{
    
  })

//Just for checking how get works when a particular LotID is given 
// useEffect(()=>{
//   axios
//   .get("http://localhost:8000/lot/65bb48d6961c0a1f3a5e170e")
//   .then((response)=>{
//     console.log(response.data.data);
//     setLotOptions(response.data.data)
//   })
  
// })

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("ButtonClicked");
    console.log(selectedLot.id)
    axios
    .get(`http://localhost:8000/data/lotdata/${selectedLot.id}/`)
    .then((response)=>{
      setData(response.data)
      console.log(data);
    })
  }


  const handChange=(e) =>{
    e.preventDefault();
    console.log(e.target.key)
    setSelectedLot({
      id:e.target.key
    });
  }

  return (
    <div className="main">

      <Navigation />
      <Image/>
      <Heading className="big-heading"></Heading>
      <SmallHead className= "b-heading"/>
      <div className='bar'>
      
        <Dropdown 
        handleChange={handChange}
        options={lotOptions}
        />
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
