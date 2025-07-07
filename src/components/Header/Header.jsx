import Logo from "../../assets/images/appLogo.svg";
import "./header.scss";

function Header() {
  return (
    <div className='navBar'>
        <div className="leftSide">
            <img src={Logo} alt="cloudyImage" />
            <h2>Weather App</h2>
        </div>
        <div className="rightSide">
        </div>
    </div>
  )
}

export default Header;