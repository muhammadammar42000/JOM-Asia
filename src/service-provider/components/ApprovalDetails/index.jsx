import { useEffect, useState } from "react"
import instance from "../../api"

const ApprovalDetails = ({setStep, step, data, setData}) => {

    const [err, setErr] = useState(false)

    const handleSubmit = () => {
        instance.post('serviceprovider/addServiceProvider', data)
        .then(res => {
            if (res.data.data.errorResult === " this email is already registered please provide a new one ")
            {
                setErr(true)
            }
            else if (res.data.success === true)
            {
                setStep(4)
            }

        })
    }

    return(
        <div className={step === 3 ? 'approve approve_active' : 'approve'}>
            <div className="approve_inner">
                <p className="approve_title">Approval Details</p>
                <div className="approve_box">
                    <label htmlFor="email">Email</label>
                    <p className="approve_text">{data.email}</p>
                    <label htmlFor="company">Company Name</label>
                    <p className="approve_text">{data.companyName}</p>
                    <label htmlFor="company">Business Name</label>
                    <p className="approve_text">{data.businessName}</p>
                    <label htmlFor="phone">Location</label>
                    <p className="approve_text">{data.businessAddress}</p>
                    <label htmlFor="phone">Phone Number</label>
                    <p className="approve_text">{data.phone}</p>
                    <label htmlFor="pass">Password</label>
                    <p className="approve_text">*********</p>
                    <label htmlFor="pass">Website</label>
                    <p className="approve_text">{data.website}</p>
                </div>
                {err && <p className='signup_err'>Email Already Exist Provide Another Email</p>}
                <button className="signup_submit signup_btn" onClick={() => handleSubmit()}>Submit</button>
                <button className="signup_submit signup_btn" onClick={() => setStep(2)}>Go Back</button>
            </div>
        </div>
    )
}

export default ApprovalDetails