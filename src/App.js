import React, { createContext } from "react";
import ComA from "./Components/ComA";
import './App.css'

const Fname = createContext();
const Lname = createContext();

const App = () => {

    return(
        <>
        <Fname.Provider value={"Saurav"}>
            <Lname.Provider value={"Sinha"}>
                <ComA/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
};

export default App;
export {Fname, Lname};