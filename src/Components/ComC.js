import React, { useContext } from "react";
import { Fname, Lname } from "../App";

const ComC = () => {
   
    const first = useContext(Fname);
    const last = useContext(Lname);

    return(
        <>
        <h1>My name is {first} {last} </h1>
        </>
    );
        
}

export default ComC;