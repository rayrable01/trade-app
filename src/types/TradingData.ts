import BotPerfomance from "./BotType";

interface TradingData {
    trading_capital: number;
    trading_capital_currency: string;
    balance: number;
    on_hold: number;
    bots: BotPerfomance[];
}

export default TradingData;