import { useState } from "react"
import AllTables from "./AllTables"
import OngoingTables from "./OngoingTables"
import CompletedTables from "./completedTables"

const Tables = () => {

    const [index, setIndex] = useState(0)

    return(
        <div className="tables">
            <div className="tables_top">
                <p className={index === 0 ? 'tables_active' : ''} onClick={() => setIndex(0)}>Upcoming</p>
                <p className={index === 1 ? 'tables_active' : ''} onClick={() => setIndex(1)}>Ongoing</p>
                <p className={index === 2 ? 'tables_active' : ''} onClick={() => setIndex(2)}>Completed</p>
            </div>
            {index === 0 && <AllTables/>}
            {index === 1 && <OngoingTables/>}
            {index === 2 && <CompletedTables/>}
        </div>
    )
}

export default Tables