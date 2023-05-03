import { useEffect, useState } from "react"
import instance from "../../../api"
import ProductBody from "./ProductBody"
import AddProduct from "./AddProduct"
import EditProduct from './EditProduct'
import ConfirmModal from "./ConfirmModal"

const Products = () => {
    const [modalType, setModalType] = useState('')
    const [productList, setProductList] = useState([])
    const [clickIndex, setClickIndex] = useState(0)
    const id = localStorage.getItem('userId')

    useEffect(() => {
        getProductList()
    }, [])

    const getProductList = () => {
        instance.post('serviceprovider/getServiceAllDetails', {
            spId: id
        })
        .then(res => {
            const result = res.data.data.successResult[0].listings
            if (result)
            {
                setProductList(result)
            }
        })
    }

    return(
        <div className="products">
            <div className="products_top">
                <p className="products_title">Products</p>
                <button className="products_add" onClick={() => {setModalType('add')}}>Add Products</button>
            </div>
            <div className="products_main">
                {productList.length > 0 && productList.map((item, index) => {
                    return(
                        <ProductBody
                            key={index}
                            index={index}
                            setClickIndex={setClickIndex}
                            setModalType={setModalType}
                            data={item}
                            getProductList={getProductList}
                        />
                    )
                })}
                {productList.length === 0 && <p>NO PRODUCTS AT THE MOMENT</p>}
            </div>
            <AddProduct
                setModalType={setModalType}
                modalType={modalType}
                getProductList={getProductList}
            />
            <EditProduct
                data={productList[clickIndex]}
                setModalType={setModalType}
                modalType={modalType}
                getProductList={getProductList}
            />
            {productList.length > 0 && <ConfirmModal
                setModalType={setModalType}
                modalType={modalType}
                productId={productList[clickIndex].id}
                getProductList={getProductList}
                setClickIndex={setClickIndex}
            />}
        </div>
    )
}

export default Products