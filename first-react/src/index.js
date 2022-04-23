import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const book2={
  img:"https://images-eu.ssl-images-amazon.com/images/I/41-Jq9RDQwL._AC_SX184_.jpg",
  title:"ayush",
  number:2
}

const Booklist=()=>{
  return(
    <div>
      <Book 
      img="https://m.media-amazon.com/images/I/91MDUJ1ejuS._AC_UL480_FMwebp_QL65_.jpg"
      author="ayush"
      title="hello i am a prop"
      />   
      <Book
      img={book2.img}
      title={book2.title}
      // number=2 we cant assign number like this we have to use curly braces to identify that we are using javascript
      number={book2.number} 
      />   
    </div>
  );
}
const Book=(props)=>{
  return (
    <div>
    <img src={props.img} alt="" />
    <h1>{props.author}</h1>
    <p>{props.title}</p>
    <p>{props.number}</p>
    </div>
  );
}

ReactDOM.render(<Booklist/>,document.getElementById('root'));

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
