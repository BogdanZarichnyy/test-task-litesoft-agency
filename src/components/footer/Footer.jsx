import Button from '@mui/material/Button';

import sprite from '../../images/sprite.svg';

import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className='container'>
        <div className={scss.wrraper}>

          <span className={scss.back} onClick={() => console.log('Back')}>
            <svg className={scss.backIcon} width="24" height="24">
              <use id="arrowleft" href={`${sprite}#arrowleft`} />
            </svg>
            Back
          </span>

          <div className={scss.buttons}>
            <Button variant="outlined" 
              className={scss.addButton} 
              onClick={() => console.log('Adding product')}
            >
                Add product
            </Button>
            <Button variant="contained"
              className={scss.addButton} 
              onClick={() => console.log('Adding card')}
            >
                Add to cart
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;