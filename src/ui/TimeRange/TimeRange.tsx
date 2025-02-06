import { useContext} from "react"
import { MainContext} from "../../Provider/MainContext"

export const TimeRange = () => {
    const {activeButton, setActiveButton} = useContext(MainContext);

    return (
        <section className="time">
            <div className="container time__container">
                <h4 className="time__title">Time Range:</h4>
                <div className="time__wrapper">
                    {["24h", "7d", "30d", "all_time"].map((range) => (
                        <button
                            key={range}
                            className={`time__button ${activeButton === range ? "active" : ""}`}
                            onClick={() => setActiveButton(range)}
                        >
                            {range === "all_time" ? "All time" : range}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}