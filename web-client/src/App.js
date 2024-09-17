/** @format */

// import { useState } from "react";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import img from './images/omer1.jpeg'
import AddUser from "./AddUser/AddUser";

function App() {


    let s1 = { id: 1, name: "Yuval", grade : 100, profilePic: img }
    let s2 = { id: 2, name: "Noam", grade : 90, profilePic: img }
    let s3 = { id: 3, name: "Ariel", grade : 80, profilePic: img }
    let s4 = { id: 4, name: "Ohad", grade : 70, profilePic: img }
    let s5 = { id: 5, name: "Oded", grade : 60, profilePic: img }
    let s6 = { id: 6, name: "Valeria", grade : 50, profilePic: img }

    let test = {
        name: "Test 1",
        soldiers: [
            s1,
            s2,
            s3,
            s4,
            s5,
            s6
        ],
        format: "HIGH",
        findBySoldierId: (id) => test.soldiers.find((s) => (s.id == id)),
        excellent: 80,
        pass: 60
    }

    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={ <AddUser /> } />
        //     </Routes>
        // </BrowserRouter>
        <TestStatus test={test} />
    );
}

export default App;
