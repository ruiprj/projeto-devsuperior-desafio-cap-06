import { useState } from 'react';
import './App.css';
import CityFilter from './components/city-filter';
import Header from './components/header';
import SalesOverview from './components/sales-overview';
import { FilterData } from './types/filter-data';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);

    console.log('App FilterData', filter);
  };

  return (
    <div className="App">
      <>
        <Header />

        <div className="app-container">
          <CityFilter onFilterChange={onFilterChange} />

          <SalesOverview filterData={filterData} />
        </div>
      </>
    </div>
  );
}

export default App;
