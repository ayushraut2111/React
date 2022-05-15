import React ,{useState} from "react";
import '../../App.css'
const Form=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const Submit=(e)=>{
        e.preventDefault();    
        console.log(name,email);
    }
    return (
        <>
        <article>
            <form className='form' onSubmit={Submit}>    
                <div className="form-content">
                    <label htmlFor="formName">Name : </label>
                    <input type="text" id="formName" name="formName" value={name}  
                    onChange={(e)=>setName(e.target.value)}/> 
                </div>
                <div className="form-content">
                    <label htmlFor="formEmail">Email : </label>
                    <input type="text" id="formEmail" name="formEmail" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>

            </form>
        </article>
        </>
    );
};

export default Form;