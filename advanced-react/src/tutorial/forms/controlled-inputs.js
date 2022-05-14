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
            <form className='form' onSubmit={Submit}>    {/* to save the input value first we have to declare a state variables and initially assign them empty*/}
                <div className="form-content">
                    <label htmlFor="formName">Name : </label>
                    <input type="text" id="formName" name="formName" value={name}  //to add that variable with initial valuw with form add value attribute in the input tag this will put the initial value into the form
                    onChange={(e)=>setName(e.target.value)}/>  {/*to save the input value we have to add attribute onchange into the input which will save the changed value inside it we will pass the event and that value state and inside state we will trigger e.target.value so whatever there is a change in the value will be saved in variable */}
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