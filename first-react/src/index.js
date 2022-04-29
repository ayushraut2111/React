import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books'


const Booklist=()=>{
  return(
    <div>
      {
        books.map((book)=>{
          return (<Book key={book.id} {...book} >
            <h1>
              hello
            </h1>
            </Book>
            
            )
        })
      }
    </div>
  );
}
const Book=({number,img,author,title,children})=>{
  // const {number,img,author,title}=props.book;
  const event=(title)=>{
    alert(title);
  }
  
  return (
    <article>
      {children}
    <img src={img} alt="" />
    <h1>{author}</h1>
    <p>{title}</p>
    <p>{number}</p>
    <button onClick={()=>event(title)}>  
    {/* if we want to happen some event while listening event and we have to pass anything and go to another function then pass like that */}
      eventlistener
    </button>
    </article>
  );
}


// ReactDOM.render(<Booklist/>,document.getElementById('root'));
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Booklist/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Greeting />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
