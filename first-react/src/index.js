import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Booklist=()=>{
  return(
    <div>
      <Book/>   
    </div>
  );
}
const title='hello world';
const Book=()=>{
  const author='Ayush';
  return (
    <div>
    <img src="https://m.media-amazon.com/images/I/91MDUJ1ejuS._AC_UL480_FMwebp_QL65_.jpg" alt="" />
    <h1>{author}</h1>
    <p>{title}</p>
    <p>{6+6}</p>     {/* this will work properly as this will return 6+6  */}
    {/* <p>{let x=6+6}</p>     we cant initialise it as this because it is not returning anything but JS inside JSX must return any value */}
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
