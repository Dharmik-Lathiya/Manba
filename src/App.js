import './App.css';
import logo from './Assets/logo.png';
import Home from './Components/Home';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-lime-400">
      <img src={logo} alt="Girl in a jacket" width="60" height="70" style={{'height':'5vw','widows':'2vw','marginLeft':'5vw'}}/>
  <a className="navbar-brand Barnd-Title" href="/" style={{'color':'var(--blue'}}>Manba Finaserve</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse Navbar-Item" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-a" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-a" href="/">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-a" href="/">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-a " href="/">Contect Us</a>
      </li>
    </ul>
  </div>
</nav>
<Home/>
    </>
  );
}

export default App;
