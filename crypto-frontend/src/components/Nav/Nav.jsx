import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTOHOME</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
      <Link to="/signup">
      <div>SIGNUP</div>
      </Link>
      <Link to="/login">
      <div>LOGIN</div>
      </Link>
      {/* <Link to="/price"> */}
        {/* <div>PRICES</div> */}
      {/* </Link> */}
    </div>
  );
}