const CardsBody = ({title, value, icon}) => {
    return(
        <div className="cards_body">
            <p className="cards_title">{title}</p>
            <p className="cards_value">{value}</p>
            <img className="cards_icon" src={icon} alt="" />
        </div>
    )
}

export default CardsBody