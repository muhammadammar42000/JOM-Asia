const Congrats = ({step}) => {
    return(
        <div className={step === 4 ? 'congrats congrats_active' : 'congrats'}>
            <div className="congrats_inner">
                <p className="congrats_text">Congratulations! Your request has been submitted successfully</p>
                <p className="congrats_close" onClick={() => window.location.reload()}>&#x2715;</p>
            </div>
        </div>
    )
}

export default Congrats