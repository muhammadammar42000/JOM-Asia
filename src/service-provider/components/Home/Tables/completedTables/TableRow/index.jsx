import EyeIcon from '../../../../../assets/images/eye.png'

const TableRow = ({setShowDetails, data, index, setViewIndex}) => {
    return(
        <tr>
            <td>{data.bookingStartDate.substr(0, 10)}</td>
            <td>{data.customerName}</td>
            <td>{data.companyName}</td>
            <td>{data.quantity}</td>
            <td>{data.paymentGatewayName}</td>
            <td>Completed</td>
            <td><img className="tables_view" src={EyeIcon} alt="" onClick={() => {setShowDetails(true); setViewIndex(index)}}/></td>
        </tr>
    )
}

export default TableRow