import './App.css';
import CityFilter from './components/city-filter';
import Header from './components/header';
import SalesOverview from './components/sales-overview';

function App() {
  return (
    <div className="App">
      <>
        <Header />

        <div className="app-container">
          <CityFilter />

          <SalesOverview />
        </div>
      </>
    </div>
  );
}

export default App;
