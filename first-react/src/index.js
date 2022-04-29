import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books'
import Xyz from './Book'
const Booklist=()=>{
  return(
    <div>
      {
        books.map((book)=>{
          return (<Xyz key={book.id} {...book} >
            <h1>
              hello
            </h1>
            </Xyz>
            
            )
        })
      }
    </div>
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
