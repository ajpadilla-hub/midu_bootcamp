import './App.css';
import { Mensaje } from './Mensaje';

const Description = () => <p>react.js course by midudev</p>

function App() {
  return (
    <div className="App">
      <Mensaje color='red' bgcolor='yellow' message ='buenos días'/>
      <Mensaje color='green' message ='a todos'/>
      <Description></Description>
    </div>
  );
}

export default App;
