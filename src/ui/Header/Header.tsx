import burger from '../../assets/burger-menu-svgrepo-com.svg'
import refresh from '../../assets/refresh-cw-alt-3-svgrepo-com.svg'
import '../../App.css'
import { useContext } from 'react';
import { MainContext } from '../../Provider/MainContext';

export const Header = () => {
    const {setError} = useContext(MainContext);
    
        const handleClick = () => {
            setError(true);
        }

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header__left">
                        <button type='button' onClick={handleClick}>
                            <img src={burger} alt="burger-menu" className='header__burger' />
                        </button>
                    </div>
                    <div className="header__middle">
                        <span className='header__title'>Dashboard</span>
                    </div>
                    <div className="header__right">
                        <button type='button' onClick={() => window.location.reload()}>
                            <img src={refresh} alt="header__refresh" className='header__refresh'/>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}