
import './App.css';
import Menu from "../src/images/menu-top-xs.png";
import Logo from "../src/images/ironhack-logo-xs.png";
import Declarative from "../src/images/icon1.png"
import Components from "../src/images/icon2.png"
import Single from "../src/images/icon3.png"
import Jsx from "../src/images/icon4.png"


function Navbar() {
  return (
    <nav className='navbar'>
      <img
        id="nav-img"
        src={Logo}
        alt="logo"
      />
      <img
        id="nav-img-menu"
        src={Menu}
        alt="menu"
      />
    </nav>
  );
}
function Cards() {
  return (
    <div className="section-cards">
      <div className="card">
        <img className="card-img" src={Declarative} alt="declarative-img" />
        <h4>Declarative</h4>
        <p>React makes it <br />painless to create <br />interactive UIs.</p>
      </div>
      <div className="card">
        <img className="card-img" src={Components} alt="components-img" />
        <h4>Components</h4>
        <p>Build encapsulated <br />components that<br /> manage their state.</p>
      </div>
      <div className="card">
        <img className="card-img" src={Single} alt="singleWay-img" />
        <h4>Single-Way</h4>
        <p>A set of immutable <br />values are passed to<br /> the component's.</p>
      </div>
      <div className="card">
        <img className="card-img" src={Jsx} alt="JSX-img" />
        <h4>JSX</h4>
        <p>Statically-typed,<br /> designed to run on<br /> modern browsers.</p>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
     <main>
     {Navbar()}
     <div className="main-section">
      <h1>Say Hello to <br /> ReactJS!</h1>
      <p>
        You will learn how to use <br /> the most popular frontend library,<br /> and become
        a super Ninja developer.
      </p>
      <button className="button">Awesome!</button>
    </div>
     </main>
       {Cards()}   
    </div>
  );
}

export default App;
