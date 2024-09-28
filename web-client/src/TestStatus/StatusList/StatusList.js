/** @format */

// import { React, useRef } from "react";
// import { getReformattedDate } from "../../../shared/userApi.js";
import SoldierStatus from "./SoldierStatus";
import '../TestStatus.css'
import { fetchTestResults, fetchSoldiers } from "../../general/API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StatusList({ test }) {
    const [results, setResults] = useState([]);
    const [soldiers, setSoldiers] = useState([]);

    useEffect(() => {
        fetchTestResults(test).then((fetchedResults) => {
            if (fetchedResults == null) {
                alert("Error fetching soldier results");
                return;
            }

            // Get soldier ID's from results
            const soldierIDs = fetchedResults.map((result) => result.soldierID);
            fetchSoldiers(soldierIDs).then((fetchedSoldiers) => {
                if (fetchedSoldiers == null) {
                    alert("Error fetching soldiers");
                    return;
                }
                setSoldiers(fetchedSoldiers);
            });
            setResults(fetchedResults);
        });
    }, test);

    const soldierComponents = results.map((result) => (
        <Link to={`/Test/${test.name}/${result.soldierID}`} key={result.soldierID}>
            <SoldierStatus
                soldier={soldiers.find((soldier) => soldier.armyID == result.soldierID)}
                result={result}
                test={test}
            />
        </Link>
    ));

    return (
        <div className = "card-body p-3">
            <ul className="list-group list-group-flush overflow-auto" id="status-list">
                {soldierComponents}
            </ul>
        </div>
    );
}

export default StatusList;
