import './App.css';
import Heading from './atoms/Heading/Heading';
import SmallHead from './atoms/SmallHead/SmallHead';
import Button from './atoms/button/Button';
import Descr from './atoms/descr/Descr';
import Dropdown from './atoms/dropdown/Dropdown';
import Image from './atoms/Images/Image';
import Navigation from './atoms/Navigation/Navigation';
import BasicTable from './atoms/Table/Table';
import BottomNavigation from './atoms/BottomNavigation/BottomNavigation';

function App() {
  return (
    <div className="main">

      <Navigation />
      <Image/>
      <Heading className="big-heading"></Heading>
      <SmallHead className= "b-heading"/>
      <div className='bar'>
      
        <Dropdown/>
        <Button className="submit-button" text="SUBMIT"/>

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
