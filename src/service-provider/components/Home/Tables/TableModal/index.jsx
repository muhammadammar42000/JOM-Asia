// import Img from '../../../../assets/images/img1.png'
import Cross from '../../../../assets/images/cross.png'

const TableModal = ({setShowDetails, showDetails, data, status}) => {
    return(
        <div className={showDetails === true ? 'tmodal tmodal_active' : 'tmodal'}>
            <div className="tmodal_inner">
                <img src={Cross} alt="" className='tmodal_close' onClick={() => setShowDetails(false)} />
                <p className="tmodal_id">{data.bookingId}</p>
                <p className="tmodal_date">Created Date <b>{data.bookingStartDate.substr(0, 10)}</b></p>
                <div className="tmodal_top">
                    <div className="tmodal_img">
                        <img src={data.image} alt="" />
                    </div>
                    <p className="tmodal_name">{data.companyName}</p>
                </div>
                <div className="tmodal_details">
                    <div>
                        <p className="tmodal_heading">Customer's Name</p>
                        <p className="tmodal_text">{data.customerName}</p>
                    </div>
                    <div>
                        <p className="tmodal_heading">Guest</p>
                        <p className="tmodal_text">{data.quantity}</p>
                    </div>
                    <div>
                        <p className="tmodal_heading">Children Number</p>
                        <p className="tmodal_text">{data.childrenNumber}</p>
                    </div>
                </div>
                <div className="tmodal_details">
                    <div>
                        <p className="tmodal_heading">Pay with</p>
                        <p className="tmodal_text">{data.paymentGatewayName}</p>
                    </div>
                    <div>
                        <p className="tmodal_heading">Amount</p>
                        <p className="tmodal_text">{data.dayCharges}</p>
                    </div>
                    <div>
                        <p className="tmodal_heading">Phone</p>
                        <p className="tmodal_text">{data.phone}</p>
                    </div>
                </div>
                <div className="tmodal_details">
                    <div>
                        <p className="tmodal_heading">National id</p>
                        <p className="tmodal_text">---</p>
                    </div>
                    <div className="tmodal_mainDetails">
                        <div>
                            <p className="tmodal_heading">Check in</p>
                            <p className="tmodal_text mb-4"><b>{data.bookingStartDate.substr(0, 10)}</b></p>
                            <p className="tmodal_heading">Check Out</p>
                            <p className="tmodal_text"><b>{data.bookingEndDate.substr(0, 10)}</b></p>
                        </div>
                        <div>
                            <p className="tmodal_heading">Status</p>
                            <p className="tmodal_text">{status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableModal