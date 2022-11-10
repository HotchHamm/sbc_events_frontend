import { Link } from "react-router-dom";
import sbcLogo from "../assets/sbcLogo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="d-flex justify-content-between header">
      <div className="">
        <Link to="/" className="link-secondary">
          <img
            src={sbcLogo}
            alt="Sports Biz Camp logo"
            className="header-logo"
          ></img>
        </Link>
      </div>
      <div className="mt-3 me-3">
        <Link
          to="/login"
          type="button"
          className="btn btn-link btn-header fw-bold"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          type="button"
          className="btn btn-link btn-header fw-bold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
