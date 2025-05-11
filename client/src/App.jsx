import './App.css';
import { Directory } from './data/Directory';
import { Controls } from './components/Controls';

function App() {

  return (
    <>
      <Controls players={Directory} />
    </>
  );
}

export default App;
