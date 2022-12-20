import './App.css';
import { Convert } from './convert/convert';
import { data } from "./data"

function App() {
  return (
    <div className="App">
      <h1 className='convert-title'> Convert </h1>
      <Convert data={data} />
    </div>
  );
}

export default App;
