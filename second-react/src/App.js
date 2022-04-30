import './App.css'
import Objects from './objects'

const App=()=>
{
  return(
    <div className="mainbody">
      <nav class="navbar">
        <ul class="list">
            <li class="navc" id="navc1">amazon</li>
            <li class="navc" id="navc1">Deliever to ayush</li>
            <li class="navc" id="navc3"><input type="search" name="" id="search" placeholder='                              search'/></li>
            <li class="navc" id="navc4">Hello, Ayush
               <div class="inner">
                   <a href="" class="main">Account</a>
                   <a href="" class="main">Orders</a>
                   <a href="" class="main">Browsing history</a>
                   <a href="" class="main">Recommendations</a>
                   <a href="" class="main">Watchlist</a>
                   <a href="" class="main">kindle unlimited</a>
                   <a href="" class="main">Subscribe</a>
                   <a href="" class="main">Switch account</a>
                   <a href="" class="main">Sign out</a>
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





// <div className="main">
//     <h1 className="mainheading">
//       hello i am heading
//     </h1>
//     <div className="content">
//       {
//         Objects.map((obj)=>
//         {
//           return (<Body {...obj}/>)
//         }
//         )
//       }
//     </div>
//   </div>
