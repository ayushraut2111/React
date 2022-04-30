import './App.css'
import Objects from './objects'

const App=()=>
{
  return(
    <div className="mainbody">
      <nav className="navbar">
        <ul className="list">
            <li className="navc" id="navc1">amazon</li>
            <li className="navc" id="navc1">Deliever to ayush</li>
            <li className="navc" id="navc3"><input type="search" name="" id="search" placeholder='                              search'/></li>
            <li className="navc" id="navc4">Hello, Ayush
               <div className="inner">
                   <a href="" className="main">Account</a>
                   <a href="" className="main">Orders</a>
                   <a href="" className="main">Browsing history</a>
                   <a href="" className="main">Recommendations</a>
                   <a href="" className="main">Watchlist</a>
                   <a href="" className="main">kindle unlimited</a>
                   <a href="" className="main">Subscribe</a>
                   <a href="" className="main">Switch account</a>
                   <a href="" className="main">Sign out</a>
               </div>
            </li>
            <li className="navc">Returns and orders</li>
            <li className="navc">Cart</li>
        </ul>
    </nav>
    <nav className="navbar2">
      <ul className="list1">
        <li className="navc0" id="navc11">All</li>
        <li className="navc0" id="navc22">Today's Deals</li>
        <li className="navc0" id="navc33">Buy Again</li>
        <li className="navc0" id="navc44">Customer Service</li>
        <li className="navc0" id="navc55">Browsing History</li>
        <li className="navc0" id="navc66">Gift Cards</li>
        <li className="navc0" id="navc77">Registry</li>
        <li className="navc0" id="navc88">Sell</li>
        <li className="navc0" id="navc99">Shop</li>
      </ul>
    </nav>
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


