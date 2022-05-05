import './App.css';
import Setup from './tutorial/use-state/useState-object';

const a={name:"ayush",class:3,message:"hello"};
console.log(a);
const b={...a,name:"anish"};    // this is a spread operator in object this will first copy everyting in object b and then change only name to anish
console.log(b);

function App() {
  return (
    <div className="App">
      <Setup />
    </div>
  );
}

export default App;
