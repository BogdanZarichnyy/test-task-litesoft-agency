import sprite from '../../images/sprite.svg';

import scss from './Header.module.scss';

const Header = () => {
    const handlerHome = () => {
        console.log('Home');
    }

    const handlerWishlist = () => {
        console.log('Wishlist');
    }

    return (
        <header className={scss.header}>
            <div className='container'>
                <div className={scss.wrraper}>

                    <svg className={scss.home} width="15" height="15" onClick={handlerHome}>
                        <use id="home" href={`${sprite}#home`} />
                    </svg>

                    <span className={scss.wishlist} onClick={handlerWishlist}>
                        <svg className={scss.wishlistIcon} width="10" height="11">
                            <use id="arrow-crumbs" href={`${sprite}#arrow-crumbs`} />
                        </svg>
                        Wishlist
                    </span>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;