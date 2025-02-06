import { FC } from "react";
import BotPerfomance from "../../types/BotType"
import { BotItem } from "../BotItem/BotItem";
import '../../App.css'

interface BotsListProps {
    botsList: BotPerfomance[];
}

export const BotsList: FC<BotsListProps> = ({botsList}) => {
    return (
            <section className="bots">
                <div className="bots__container container">
                    <ul className="bots__list">
                        {botsList.map((bot, index) => (
                            <li key={index} className="list__item">
                                <BotItem data={bot} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
    )
}