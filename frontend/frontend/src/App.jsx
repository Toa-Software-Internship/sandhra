import './App.css';
import Heading from './atoms/Heading/Heading';
import SmallHead from './atoms/SmallHead/SmallHead';
import Button from './atoms/button/Button';
import Descr from './atoms/descr/Descr';
import Dropdown from './atoms/dropdown/Dropdown';
import Image from './atoms/Images/Image';
import Navigation from './atoms/Navigation/Navigation';
import BasicTable from './atoms/Table/Table';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Image/>
      <Descr/>
      <Heading className="big-heading"></Heading>
      <SmallHead className= "b-heading"/>
      <div className='bar'>
      
      <Dropdown/>
      <Button className="submit-button" text="SUBMIT"/>

      </div>
      <BasicTable/>
  
    </div>
  );
}

export default App;
