import instance from "../../../../../api"
import { toast } from "react-toastify";

const ConfirmModal = ({button, setButton, bookingId}) => {

    toast.configure();

    const handleBooking = () => {
        if (button)
        {
            instance.post('/serviceprovider/approveBookings', {
                bookingId: bookingId,
                status: button === 'accept' ? 1 : 0
            })
            .then(res => {
                if (res.data.success === true && button === 'accept')
                {
                    toast.success('Booking Accepted', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setButton('')
                }
                else if (res.data.success === true && button === 'reject')
                {
                    toast.error('Booking Rejected', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setButton('')
                }
            })
        }
    }

    return(
        <div className={button ? 'confirm confirm_active' : 'confirm'}>
            <div className="confirm_inner">
                <p className="confirm_title">{button === 'accept' ? 'Accept Booking ?' :  'Reject Booking ?'}</p>
                <div className="confirm_btns">
                    <button className="confirm_action" onClick={handleBooking}>{button === 'accept' ? 'Accept' :  'Reject'}</button>
                    <button className="confirm_cancel" onClick={() => setButton('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal