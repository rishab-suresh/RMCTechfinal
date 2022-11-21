import React, { useState, useRef } from 'react'

import './Form.css';


const Form = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyUqqh4cXOrGQD1ys7bilB43S-ZFxz7Rf2hasMjJwSXNStSwqV2q5KB53e2Yb5lNbTB6A/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
            .catch(err => console.log(err))
    }


    return (
        <div className='container col-lg-6 mt-0 mb-0'>
            
              
                    <form className='submission' ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                        <div className="input-style">
                            <label htmlFor='name'>
                                Name
                            </label>
                            <input type="text" id="name" name="name" placeholder='Your Name *' />
                        </div>
                        <div className="input-style">
                            <label htmlFor='name'>Email</label>
                            <input type="email" name="email" placeholder='Your Email *' />
                        </div>
                        <div className='input-style'>
                            <label htmlFor='subject' >What is your query</label>
                            <select className="form-select" id="subject" name="subject">
                                <option value="pricing" selected>Pricing Query</option>
                                <option value="designing" selected>Designing Query</option>
                                <option value="planning" selected>Planning Query</option>
                                <option value="other" selected>Other Queries</option>
                            </select>
                        </div>
                        <div className="input-style">
                            <label htmlFor='name'>Your Query in Detail</label>
                            <input type="text-area" name="query" placeholder='Query*' />
                        </div>
                        <div className="input-style">

                            <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
                            <input type="reset" value="Reset"></input>
                        </div>
                    </form>
                
            

        </div>
    )
}

export default Form
