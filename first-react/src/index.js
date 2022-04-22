import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Booklist=()=>{
  return(
    <div>
      <Book/>   
      <Book/>
      <Book/>
    </div>
  );
}
const Book=()=>{
  return (
    <div>
    <Image/>
    <Title/>
    <Author/>
    </div>
  );
}
const Image=()=> <img src="https://m.media-amazon.com/images/I/91MDUJ1ejuS._AC_UL480_FMwebp_QL65_.jpg" alt="" />;
const Title=()=> <h1>Hello i am a book</h1>;
const Author=()=> <p>Ayush</p>;

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
// reportWebVitals()
