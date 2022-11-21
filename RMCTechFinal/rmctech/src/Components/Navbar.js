import "../Components/Navbar.css";
import Logo from "../Assets/Img/LOGO.png"
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-light px-5">
      <a className="navbar-brand" href="/"><img src={Logo}className="logo"/></a>
      <div className="container-xxl">
        <button className="navbar-toggler position-absolute top-4 end-0 mx-5 mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
  
          <ul className="navbar-nav me-auto mb-2 px-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"><Link to='/'>Home</Link></a>
            </li>
            <li className="nav-item">
            <a className="nav-link"><Link to='/FAQpage'> FAQ </Link> </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link"><Link to='/Aboutpage'> About Us </Link> </a>
            </li>
          </ul>
          <ul className="navbar-nav me-5 mb-lg-1">
            
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact"> <button type="button" className="btn-primary">Get A Quote</button></a>

            </li>
          
            
  
          </ul>
        </div>
  
      </div>
    </nav>
  );

};
export default Navbar;