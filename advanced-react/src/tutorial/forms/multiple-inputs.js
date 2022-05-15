import React ,{useState} from "react";
import '../../App.css'
const Form=()=>{
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    const [person,setPerson]=useState({name:'',email:'',age:''});  // to save all the variables make one object
    const [people,setPeople]=useState([]);

    const Change=(e)=>{
        const firstname=e.target.name;  // when there is change in the value then we can access the changed input name in firstname 
        const value=e.target.value;  // and it's value in value 
        setPerson({...person,[firstname]:value});  // then we only change the current value dynamically 
        }
    const Submit=(e)=>{
       if(person.age&&person.email&&person.name)
       {
           setPeople([...people,person])   // then we will save the changed object in the current array by copying it 
           setPerson({name:'',email:'',age:''});  // then we will again initialise it to empty
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
                    <input type="text" id="formName" name="name" value={person.name}  // give the initial value as the object's corresponding value which we want to give it by default
                    onChange={Change}/> {/* instead of writing different change function for every input make one function and then change in it*/}
                </div>
                <div className="form-content">
                    <label htmlFor="formEmail">Email : </label>
                    <input type="text" id="formEmail" name="email" value={person.email}  // give the name same as the variable in the object because with the name value we will access the object corresponding value
                    onChange={Change}/> 
                </div>
                <div className="form-content">
                    <label htmlFor="formAge">Age : </label>
                    <input type="text" id="formAge" name="age" value={person.age}
                    onChange={Change}/> 
                </div>
                <button type="submit">Submit</button>

            </form>
        </article>
        </>
    );
};

export default Form;