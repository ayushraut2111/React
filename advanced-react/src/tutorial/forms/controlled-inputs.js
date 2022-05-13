import React from "react";
import '../../App.css'
const Form=()=>{

    const Submit=(e)=>{
        e.preventDefault();    // if we want our to not refresh the page after submitting the form then add this
        console.log("i am submitted");
    }
    return (
        <>
        <article>
            <form class='form' onSubmit={Submit}>    {/*by adding onsubmit we can change the behavior while submitting form*/}
                <div className="form-content">
                    <label htmlFor="formName">Name : </label>
                    <input type="text" id="formName" name="formName"/>
                </div>
                <div className="form-content">
                    <label htmlFor="formEmail">Email : </label>
                    <input type="text" id="formEmail" name="formEmail"/>
                </div>
                <button type="submit">Submit</button>
                {/* <button type="submit" onClick={Submit}>Submit</button>    instead of writing onsubmit on form we can also add it in onclick in button that whatwe want to do when we click on submit so both will do the same thing */}

            </form>
        </article>
        </>
    );
};

export default Form;