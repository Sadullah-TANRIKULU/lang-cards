import './App.css';
import Card from './components/Card';
import { languages } from "./data";

function App() {


  return (
    <div className='container' >
      {languages.map((props) => <Card {...props} />)}
      {/* {languages.map((item)=> <Card name={item.name} />)} */}
    </div>
  );
}

export default App;
