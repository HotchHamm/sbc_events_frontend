import { Link } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  return (
    <div className="bg-off-white min-vh-100">
      <Header />
      <div className="d-flex p-5">
        <div className="col-10 col-md-6 bg-white shadow rounded mx-auto p-5">
          <h1 className="fw-bold text-center mt-5 mb-5">Sign in</h1>
          <div className="d-block w-75 mx-auto">
            <form className="d-flex flex-column">
              <input
                className="form-control me-md-2 mb-2"
                type="email"
                placeholder="Email"
                aria-label="email"
              />
              <input
                className="form-control me-md-2 mb-1"
                type="password"
                placeholder="Password"
                aria-label="password"
              />
              <button
                className="btn bg-green w-100 me-md-2 mt-4"
                type="submit"
              >
                Sign in
              </button>
              <div className="form-text d-flex text-center mt-5 justify-content-center">
                <div className="mx-1">New?</div>
                <Link to="/register" className="link-secondary">
                  Join today.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
