import instance from "../../../../api"
import { toast } from "react-toastify";

const ConfirmModal = ({setModalType, modalType, productId, getProductList, setClickIndex}) => {

    toast.configure();

    const deleteProduct = () => {
        instance.post('serviceprovider/deleteListing', {serviceListingId: productId})
        .then(res => {
            if (res.data.success === true)
            {
                toast.error('Product Deleted', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setModalType('')
                setClickIndex(0)
                getProductList()
            }
        })
    }

    return(
        <div className={modalType === 'delete' ? 'confirm confirm_active' : 'confirm'}>
            <div className="confirm_inner">
                <p className="confirm_title">Delete Product ?</p>
                <div className="confirm_btns">
                    <button className="confirm_action" onClick={deleteProduct}>DELETE</button>
                    <button className="confirm_cancel" onClick={() => setModalType('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal