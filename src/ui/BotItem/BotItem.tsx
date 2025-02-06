import { FC, useContext } from "react";
import BotPerfomance from "../../types/BotType"
import '../../App.css'
import { MainContext } from "../../Provider/MainContext";

interface BotItemProps {
    data: BotPerfomance;
}

export const BotItem: FC<BotItemProps> = ({data}) => {
    const {activeButton} = useContext(MainContext);

    if (activeButton in data) {
        const numValue: number = Number(data[activeButton as keyof BotPerfomance]);
        let isPositive: boolean = true;

        if (numValue < 0) {
            isPositive = false;
        }

        return (
            <div className="bot__wrapper">
                <div className="bot__content">
                    <span className="bot__name">{data.name}</span>
                    <span className={`bot__perfomance ${isPositive ? 'positive' : 'negative'}`}>{data[activeButton as keyof BotPerfomance]}%</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bot__wrapper">
                <div className="bot__content">
                    <span className="bot__name">{data.name}</span>
                    <span className="bot__error">No data</span>
                </div>
            </div>
        );
    }
}