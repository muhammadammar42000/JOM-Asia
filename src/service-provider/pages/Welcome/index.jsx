import { useState } from 'react'
import Logo from '../../../admin/assets/images/logoJOM.png'
import Login from '../../components/Login'
import Signup from '../../components/Signup'
import ApprovalDetails from '../../components/ApprovalDetails'
import Congrats from '../../components/Congrats'



const Welcome = () => {


    const [step, setStep] = useState(0)
    const [data, setData] = useState({})

    return(
        <div className="welcome">
            <div className="welcome_inner">
                <img className='welcome_logo' src={Logo} alt="" />
                <p className="welcome_title">WELCOME TO JOM <br />ADMIN DASHBOARD</p>
                <button className='welcome_btn' onClick={() => setStep(1)}>Get Started</button>
            </div>
            <Login setStep={setStep} step={step} />
            <Signup 
                setStep={setStep}
                step={step}
                setData={setData}
                data={data}
            />
            <ApprovalDetails
                setStep={setStep}
                step={step} 
                data={data} 
                setData={setData}
            />
            <Congrats setStep={setStep} step={step} />
        </div>
    )
}

export default Welcome