import { useContext } from "react";
import { MainContext } from "../../Provider/MainContext";
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Main } from '../Main/Main'
import { Error } from "../Error/Error";

export const Layout = () => {
    const {error} = useContext(MainContext);

    return (
        <>
            <Header />
            <Main />
            <Footer />
            {error && <Error />}
        </>
    )
}