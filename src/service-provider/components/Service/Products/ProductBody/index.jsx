import instance from "../../../../api"
import { toast } from "react-toastify";

const ProductBody = ({data, setModalType, index, setClickIndex, getProductList}) => {

    toast.configure();

    const handleEdit = () => {
        setModalType('edit')
        setClickIndex(index)
    }

    const handleDelete = () => {
        setModalType('delete')
        setClickIndex(index)
    }

    const toggleAvailability = () => {
        instance.post('serviceprovider/updateSpAvailability', {
            serviceListingId: data.id,
            availability: data.availability ? 1 === 0 : 1
        })
        .then(res => {
            if (data.availability === 1)
            {
                toast.error('Product Disabled', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else if (data.availability === 0)
            {
                toast.success('Product Enabled', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            getProductList()
        })
    }

    return(
        <div className="products_body">
            <div className="products_img">
                <img src={data.image} alt="" />
                <p className="products_date">Created Date - {data.createdAt.substr(0,10)}</p>
                <p className="products_name">{data.title}</p>
            </div>
            <div className="products_mid">
                <div className="products_left">
                    <p className="products_textRed">From</p>
                    <p className="products_text">RM {data.price}</p>
                    {/* <p className="products_textRed">For tonight</p> */}
                </div>
                <div className="products_right">
                    <label className="switch">
                        <input type="checkbox" checked={data.availability === 1 ? false : true} onChange={toggleAvailability} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="products_bottom">
                <button className="products_edit" onClick={handleEdit}>Edit</button>
                <button className='products_delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default ProductBody