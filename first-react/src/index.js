import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const books=[{
  img:"https://images-eu.ssl-images-amazon.com/images/I/41-Jq9RDQwL._AC_SX184_.jpg",
  title:"ayush",
  number:2,
  author:'chaurasia'
},
{
  img:"https://images-eu.ssl-images-amazon.com/images/I/41-Jq9RDQwL._AC_SX184_.jpg",
  title:"ayush",
  number:2
}]

const Booklist=()=>{
  return(
    <div>
      {
        books.map((book)=>{
          return (<Book {...book} >
            <h1>
            </h1>
            </Book>)
        })
      }
    </div>
  );
}
const Book=(props)=>{
  const {number,img,author,title}=props;
  return (
    <article>
      {props.children}
    <img src={img} alt="" />
    <h1>{author}</h1>
    <p>{title}</p>
    <p>{number}</p>
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
