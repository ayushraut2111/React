import './App.css';
import Objects from './objects'

const App=()=>
{
  return(
  <div className="main">
    <h1 className="mainheading">
      hello i am heading
    </h1>
    <div className="content">
      {
        Objects.map((obj)=>
        {
          return (<Body {...obj}/>)
        }
        )
      }
    </div>
  </div>
  );
}
const Body=(props)=>
{
  const {id,name,lastname}=props;
  return(
    <div className="body">
      <h4>{id}</h4>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
    </div>
  );
}

export default App;
