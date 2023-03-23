import Select from 'react-select';
import './styles.css';

function Filter() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div className="filter-container  base-card">
      <form className="filter-form">
        <div className="filter-select-container">
          <Select
            options={options}
            isClearable
            placeholder="Selecione..."
            classNamePrefix="filter-select"
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;