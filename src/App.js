import AutoComplete from 'components/AutoComplete/AutoComplete';
import Header from 'components/Header/Header';
import data from './data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="autocomplete">
        <AutoComplete
          suggestions={data}
        /> 
      </div>
    </div>
  );
}

export default App;
