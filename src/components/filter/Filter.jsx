import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import scss from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={scss.filter}>

      <div className={scss.filterButtons}>

        <Button variant="contained" endIcon={<DeleteIcon color='disabled' />}
          className={scss.button} 
          onClick={() => console.log('All products')}
        >
          All products
        </Button>

        <Button variant="contained" endIcon={<DeleteIcon color='disabled' />}
          className={scss.button} 
          onClick={() => console.log('Phones')}
        >
          Phones
        </Button>

        <Button variant="contained" endIcon={<DeleteIcon color='disabled' />}
          className={scss.button} 
          onClick={() => console.log('Accessories')}
        >
          Accessories
        </Button>

      </div>

      <Button variant="outlined" 
        className={scss.categoryButton} 
        onClick={() => console.log('New category')}
      >
        New category
      </Button>

    </div>
  );
};

export default Filter;