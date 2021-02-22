import logo from './logo.svg';
import './App.css';
import Barchart from './components/barchart';
import Linechart from './components/linechart';
import Piechart from './components/piechart';

function App() {
  return (
    <div className="App">
        <Barchart/>
        <Linechart/>
        <Piechart/>
    </div>
  );
}

export default App;
