import Button from '@mui/material/Button';

import scss from './AddButton.module.scss';

const AddButtom = ({ id }) => {
  const handlerAddCard = (idRow) => {
    console.log('Adding card id =', idRow);
  }

  return (
    <Button variant="outlined" 
      className={scss.addButton} 
      onClick={() => handlerAddCard(id)}
    >
      Add to cart
    </Button>
  );
};

export default AddButtom;