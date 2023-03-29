import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Store } from '../../types/store';
import { makeRequest } from '../../utils/requests';
import './styles.css';

function CityFilter() {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get('/stores?storeId=0').then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  const onChangeStore = (value: Store) => {
    console.log(value);
  };

  return (
    <div className="city-filter-card  base-card">
      <form className="city-filter-form">
        <div className="city-filter-select-container">
          <Select
            options={selectStores}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="city-filter-select"
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
            onChange={(value) => onChangeStore(value as Store)}
          />
        </div>
      </form>
    </div>
  );
}

export default CityFilter;
