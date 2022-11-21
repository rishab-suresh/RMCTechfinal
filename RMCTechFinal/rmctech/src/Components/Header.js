import "../Components/Header.css";


const Header = () => {
  return (
    <div className="container-fluid">
      <ul class="nav justify-content-start px-5 ">
        <li className="nav-item">
          <a className="nav-link" id="headerlink" href="#Offer">What we Offer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id="headerlink" href="#services">Services</a>
        </li>
       

      </ul>
    </div>
  );
};

export default Header;
