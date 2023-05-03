import { useEffect, useState } from "react"
import instance from '../../../../api'
import TableModal from "../TableModal"
import TableRow from "./TableRow"
import ConfirmModal from "./ConfirmModal"

const AllTables = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [button, setButton] = useState('')
    const [data, setData] = useState([])
    const [viewIndex, setViewIndex] = useState(0)
    const id = localStorage.getItem('userId')

    useEffect(() => {
        instance.post('serviceprovider/getSpBookings',
        {
            serviceProviderId: id,
            status: 'upcoming'
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
                        <td>Actions</td>
                        <td>View</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return(
                            <TableRow
                                key={index}
                                setShowDetails={setShowDetails}
                                setButton={setButton}
                                data={item}
                                index={index}
                                setViewIndex={setViewIndex}
                                setClicked
                            />
                        )
                    })}
                    {data.length === 0 && <p>NO UP COMING EVENTS</p>}
                </tbody>
            </table>
            {data.length > 0 && <ConfirmModal 
                button={button}
                setButton={setButton}
                bookingId={data[viewIndex].bookingId}
            />}
            {data.length > 0 && <TableModal
                setShowDetails={setShowDetails}
                showDetails={showDetails}
                data={data[viewIndex]}
                status="Up Coming"
            />}
        </div>
    )
}

export default AllTables