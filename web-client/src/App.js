/** @format */

// import { useState } from "react";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import img1 from './images/image1.jpeg'
import img2 from './images/image2.png'
import AddUser from "./AddUser/AddUser";
import SoldierTestProfile from "./SoldierTestProfile/SoldierTestProfile";
import AddSoldier from "./AddSoldier/AddSoldier";
import AddCompany from "./AddCompany/AddCompany";
import AddPlatoon from "./AddPlatoon/AddPlatoon";

function App() {

    // Example variables for pages preview.
    let s1 = { id: 1, name: "Yuval", grade : 100, profilePic: img1 }
    let s2 = { id: 2, name: "Omri", grade : 90, profilePic: img2 }
    let s3 = { id: 3, name: "Yaakov", grade : 80, profilePic: '' } // when there is no image a default one would appear
    let s4 = { id: 4, name: "Osher", grade : 70, profilePic: '' }
    let s5 = { id: 5, name: "Oshri", grade : 60, profilePic: '' }
    let s6 = { id: 6, name: "Tamir", grade: 50, profilePic: '' }
    let s7 = { id: 3, name: "Ilay", grade : 80, profilePic: '' }
    let s8 = { id: 4, name: "Yair", grade : 70, profilePic: '' }
    let s9 = { id: 5, name: "Itay", grade : 60, profilePic: '' }
    let s10 = { id: 6, name: "Liav", grade: 50, profilePic: '' }
    let s11 = { id: 3, name: "Nachshon", grade : 80, profilePic: '' }
    let s12 = { id: 4, name: "Yonatan", grade : 70, profilePic: '' }
    let test = {
        name: "Test 1",
        soldiers: [
            s1,
            s2,
            s3,
            s4,
            s5,
            s6,
            s7,
            s8,
            s9,
            s10,
            s11,
            s12,
        ],
        format: "HIGH",
        findBySoldierId: (id) => test.soldiers.find((s) => (s.id == id)),
        excellent: 80,
        pass: 60
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* -- Pages for adding new users and units -- */}
                {/*<Route path="/" element={ <AddSoldier /> } />*/}
                {/*<Route path="/" element={ <AddCompany /> } />*/}
                {/*<Route path="/" element={ <AddPlatoon platoonName={"1"} sections_num={3} /> } />*/}

                {/* -- Pages for viewing data on soldiers profiles and tests -- */}
                <Route path="/" element={ <TestStatus test={test} /> } />
                {/*<Route path="/" element={ <SoldierTestProfile test={test} soldier={s1}/> } />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
