import { Balance } from "../Balance/Balance"
import data from '../../data/data.min.json'
import { BotsList } from "../BotsList/BotsList"
import { TimeRange } from "../TimeRange/TimeRange"
import { Graphic } from "../Graphic/Graphic"


export const Main = () => {
    return (
        <>
            <main className="main">
                <Balance data={data} />
                <Graphic />
                <BotsList botsList={data.bots} />
                <TimeRange />
            </main>
        </>
    )
}