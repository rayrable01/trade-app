import { FC } from 'react'
import '../../App.css'
import TradingData from '../../types/TradingData'

interface BalanceProps {
    data: TradingData;
}

const calculateBalance = (value: number): string => {
    return (value / 1000).toFixed(3);
} 

export const Balance: FC<BalanceProps> = ({data}) => {
    

    return (
        <section className="balance">
            <div className="container balance__container">
                <h3 className="balance__title">TRADING CAPITAL</h3>
                <div className="balance__wrapper">
                    <div className='balance__current'>
                        <span className='balance__trading_capital'>{data.trading_capital}</span>
                        <span className='balance__capital_carrent'>  {data.trading_capital_currency.toUpperCase()}</span>
                    </div>
                    <div className='balance__traded'>
                        <span className='balance__descr'>
                            BALANCE:   
                            <span className='count'>{calculateBalance(data.balance)}</span>
                        </span>
                        <span className='balance__descr'>
                            ON HOLD:
                            <span className='count'>{calculateBalance(data.on_hold)}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}