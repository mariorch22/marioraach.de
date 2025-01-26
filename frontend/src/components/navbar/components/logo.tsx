import { Link } from "react-router-dom";

const Logo = () => {
    return(
      <Link to={"/"}>
        <img
            src="/images/logo_r.png"
            alt="Logo"
            className="invert z-40 mix-blend-difference"
            width={40}
            height={40}
        />
      </Link>
    )
}

export default Logo