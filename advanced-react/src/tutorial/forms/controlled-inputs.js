import React ,{useState} from "react";
import '../../App.css'
const Form=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [people,setPeople]=useState([]);
    const Submit=(e)=>{
        e.preventDefault();    
        if(name&&email)  // if there is some value in the list then only add items
        {
            const person={name,email};  // first structure items in a object
            console.log(person);
            setPeople((people)=>{     // then take the previous values and add the new object in the list
                return [...people,person];
            })
            people.map((p)=>
            {
                console.log('hello');
                console.log(p);
            });
            setName('');  // after taking value in a list change their value again to empty to get values again
            setEmail('');
        }
        else
        {
            alert("enter some value")
            console.log("list is empty");
        }
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