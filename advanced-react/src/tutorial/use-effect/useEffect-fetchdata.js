import React ,{useState,useEffect} from "react";
import '../../App.css';

const url='https://api.github.com/users';
const UseEffectFetchData=()=>
{
    const [user,setUser]=useState([]);

    const GetUsers=async()=>{
        const response= await fetch(url);
        const users=await response.json();        
        setUser(users);               // here we are using setusers inside a useeffect so everytime setusers triggers component 
        // re renders and useeffect called again and inside use effect setusers called gain so it gets into infinite loop
    };

    useEffect(()=>{
        GetUsers();
    },[]);    // so to remove the infinite loop we only renders it once by giving it second argument []
    return(
        <>
        <h1>
            Fetching data
            <div className="main">
                {
                    user.map((people)=>{
                        return <Uselist key={people.id}{...people}/>
                    })
                }
            </div>
        </h1>
        </>
    );
}
const Uselist=(props)=>{
    console.log(props);
    const {id,login,avatar_url,html_url}=props;

};
export default UseEffectFetchData;