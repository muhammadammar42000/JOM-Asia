import EyeIcon from '../../../../../assets/images/eye.png'

const TableRow = ({setShowDetails, setButton, data, index, setViewIndex}) => {
    return(
        <tr onClick={() => setViewIndex(index)}>
            <td>{data.bookingStartDate.substr(0, 10)}</td>
            <td>{data.customerName}</td>
            <td>{data.companyName}</td>
            <td>{data.quantity}</td>
            <td>{data.paymentGatewayName}</td>
            <td>
                <button className="tables_accept tables_btn" onClick={() => setButton('accept')}>Accept</button>
                <button className="tables_reject tables_btn" onClick={() => setButton('reject')}>Reject</button>
            </td>
            <td><img className="tables_view" src={EyeIcon} alt="" onClick={() => {setShowDetails(true)}}/></td>
        </tr>
    )
}

export default TableRow