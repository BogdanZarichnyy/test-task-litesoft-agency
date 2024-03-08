import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

import scss from './Actions.module.scss';

const Actions = ({ id, like, dataTableRows, setDataTableRows }) => {
  const [isLike, setIsLike] = React.useState(like);

  const handlerLike = (idRow) => {
    console.log('Card like id =', idRow);
    setIsLike(!isLike);
    setDataTableRows(() => [ 
        ...dataTableRows.filter((item) => item.id !== idRow), 
        ...dataTableRows.filter((item) => item.id === idRow).map((item) => ({ ...item, like: !isLike }))
      ].sort((prevRow, row) => prevRow.id - row.id)
    );
  }

  const handlerDelete = (idRow) => {
      console.log('Card deleted id =', idRow);
      setDataTableRows(() => dataTableRows.filter((item) => item.id !== idRow));
  }

  return (
    <Stack spacing={2} direction="row">
      <IconButton aria-label="like" 
        className={scss.likeButton} 
        onClick={() => handlerLike(id)}
      >
        <FavoriteIcon sx={{ fill: isLike ? '#405EFF' : '#E9EBEF' }} />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => handlerDelete(id)}>
        <CloseIcon sx={{ fill: '#303031' }} />
      </IconButton>
    </Stack>
  );
};

export default Actions;