import Select from 'react-select';
import './styles.css';

function CityFilter() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div className="city-filter-container  base-card">
      <form className="city-filter-form">
        <div className="city-filter-select-container">
          <Select
            options={options}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="city-filter-select"
          />
        </div>
      </form>
    </div>
  );
}

export default CityFilter;
