import { useContext } from "react";
import { MainContext } from "../../Provider/MainContext";

export const Error = () => {
    const {setError} = useContext(MainContext);

    return (
        <div className="modal-fullscreen">
            <div className="modal__message">
                <p className="modal_p">Функция в разработке... :(</p>
                <button type="button" onClick={() => setError(false)} className="modal__btn">Вернуться назад</button>
            </div>
        </div>
    );
}