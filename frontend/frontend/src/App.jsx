import './App.css';
import Heading from './atoms/Heading/Heading';
import SmallHead from './atoms/SmallHead/SmallHead';
import Button from './atoms/button/Button';
import Descr from './atoms/descr/Descr';
import Dropdown from './atoms/dropdown/Dropdown';
import Image from './atoms/Images/Image';
import Navigation from './atoms/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <div className='bar'>
      
      <Dropdown/>
      <Button className="submit-button" text="SUBMIT"/>

      </div>
      <Heading className="big-heading"></Heading>
      
      <SmallHead className= "b-heading"/>
      
      <Descr/>
      <Image/>
      <Navigation />
      

    



    </div>
  );
}

export default App;
