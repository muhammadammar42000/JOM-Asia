import NavBar from '../../components/ReuseableComponents/NavBar'
import Cards from '../../components/Home/Cards'
import Tables from '../../components/Home/Tables'

const Booking = () => {
    return(
        <div className="homesp">
            <NavBar index={4}/>
            <div className="homesp_right">
                <p className="homesp_mainTitle">Booking</p>
                <Cards/>
                <Tables/>
            </div>
        </div>
    )
}

export default Booking