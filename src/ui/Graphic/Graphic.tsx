import { FC, useContext, useMemo } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import '../../App.css'
import { MainContext} from "../../Provider/MainContext";


export const Graphic = () => {
    const {activeButton} = useContext(MainContext);

    const randomValue = () => Math.floor(Math.random() * 100) +  1;

    const days = useMemo(() => [
        { day: "01.02", value: randomValue() },
        { day: "02.02", value: randomValue() },
        { day: "03.02", value: randomValue() },
        { day: "04.02", value: randomValue() },
        { day: "05.02", value: randomValue() },
    ], [activeButton]);

    return (
        <ResponsiveContainer className='graphic__container container' width="100%" height={300}>
            <LineChart data={days}>
                <CartesianGrid strokeDasharray="3 3" /> 
                <XAxis dataKey="day" /> 
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}