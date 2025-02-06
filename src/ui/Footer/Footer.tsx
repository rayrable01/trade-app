import Market from '../../assets/market.svg?react'
import Coin from '../../assets/coin.svg?react'
import Rating from '../../assets/rating.svg?react'
import DashBoard from '../../assets/dashboard.svg?react'
import Settings from '../../assets/settings.svg?react'
import { useContext } from 'react'
import { MainContext } from '../../Provider/MainContext'


export const Footer = () => {
    const {setError} = useContext(MainContext);

    const handleClick = () => {
        setError(true);
    }

    return (
        <footer className="footer">
            <div className="footer__container container">
                <button className='footer__button active' onClick={handleClick}>
                    <DashBoard width={25} height={25} />
                    <span className='footer__descr'>Dashboard</span>
                </button>
                <button className='footer__button' onClick={handleClick}>
                    <Rating width={25} height={25} />
                    <span className='footer__descr'>Megabot</span>
                </button>
                <button className='footer__button' onClick={handleClick}> 
                    <Market width={25} height={25} />
                    <span className='footer__descr'>Bot Market</span>
                </button>
                <button className='footer__button' onClick={handleClick}>
                    <Coin width={25} height={25} />
                    <span className='footer__descr'>Coin prices</span>
                </button>
                <button className='footer__button' onClick={handleClick}>
                    <Settings width={25} height={25} />
                    <span className='footer__descr'>Profile</span>
                </button>
            </div>
        </footer>
    )
}