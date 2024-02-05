import './App.css';
import Heading from './atoms/Heading/Heading';
import SmallHead from './atoms/SmallHead/SmallHead';
import Button from './atoms/button/Button';
import Descr from './atoms/descr/Descr';
import Dropdown from './atoms/dropdown/Dropdown';


function App() {
  return (
    <div className="App">
      <div className='bar'>
      
      <Dropdown/>
      <Button/>

      </div>
      <Heading className="big-heading"></Heading>
      <Heading className="small-heading"/>
      <SmallHead className= "b-heading"/>
      <SmallHead className="s-heading"/>
      <Descr/>
    



    </div>
  );
}

export default App;
