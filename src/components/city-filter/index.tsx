import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData } from '../../types/filter-data';
import { Store } from '../../types/store';
import { makeRequest } from '../../utils/requests';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function CityFilter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);
  // const [storeId, setStoreId] = useState<number>(0);

  useEffect(() => {
    makeRequest
      .get('/stores')
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.log('Error fetching stores');
      });
  }, []);

  const onChangeStore = (value: Store) => {
    if (value === null || value === undefined) {
      value = { id: 0, name: '' };
    }

    const selectedStoreId = value.id;

    // setStoreId(selectedStoreId);

    onFilterChange({ storeId: selectedStoreId });
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
            onChange={(value) => onChangeStore(value as Store)}
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        </div>
      </form>
    </div>
  );
}

export default CityFilter;
