import { useState, useEffect } from "react"
import instance from "../../../../api"

import TableModal from "../TableModal"
import TableRow from "./TableRow"

const CompletedTables = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [data, setData] = useState([])
    const [viewIndex, setViewIndex] = useState(0)
    const id = localStorage.getItem('userId')

    useEffect(() => {
        instance.post('serviceprovider/getSpBookings',
        {
            serviceProviderId: id,
            status: 'completed'
        })
        .then(res => {
            if (res.data.success === true)
            {
                setData(res.data.data.successResult)
            }
        })
    }, [])

    return(
        <div className="tables_main">
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Customer's Name</td>
                        <td>Company's Name</td>
                        <td>Quantity</td>
                        <td>Pay with</td>
                        <td>Status</td>
                        <td>View</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return(
                            <TableRow
                                key={index}
                                setShowDetails={setShowDetails}
                                data={item}
                                index={index}
                                setViewIndex={setViewIndex}
                            />
                        )
                    })}
                    {data.length === 0 && <p>NO COMPLETED BOOKING</p>}
                </tbody>
            </table>
            {data.length > 0 && <TableModal
                setShowDetails={setShowDetails}
                showDetails={showDetails}
                data={data[viewIndex]}
                status="On going"
            />}
        </div>
    )
}

export default CompletedTables