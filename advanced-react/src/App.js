import './App.css';
import Setup from './tutorial/use-state/useState-array';
let a=[1,2,3,4];

let b=a.filter((content)=>{
  return(content!=2&&content!=3);              //filter function filters the array according to the given condition
})
console.log(b);
function App() {
  return (
    <div className="App">
      <Setup />
    </div>
  );
}

export default App;
