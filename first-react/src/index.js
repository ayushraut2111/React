import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Greeting=()=>{
  return(
    <div>
    <Person/>
    <h1>Hello</h1>
    <Message/>
    </div>
  );
}
const Person=()=>{
  return(<h1>
    Ayush
  </h1>);
}
const Message=()=><p>Byee</p>;

ReactDOM.render(<Greeting/>,document.getElementById('root'));

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
