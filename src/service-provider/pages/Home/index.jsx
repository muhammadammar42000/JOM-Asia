import NavBar from '../../components/ReuseableComponents/NavBar'
import Cards from '../../components/Home/Cards'
import Tables from '../../components/Home/Tables'

const Home = () => {
    return(
        <div className="homesp">
            <NavBar index={1}/>
            <div className="homesp_right">
                <p className="homesp_mainTitle">Home</p>
                <Cards/>
                <p className="homesp_title">Booking</p>
                <Tables/>
            </div>
        </div>
    )
}

export default Home