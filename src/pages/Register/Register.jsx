import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header.jsx";

export default function RegisterSelect() {
  return (
    <>
      <Header />
      <div className="d-flex flex-row sign-up__main">
        <div className="container container-main p-5 col-12 col-md-8">
          <div className="container my-5">
            <h1 className="text-center page-title">Register a new account</h1>
          </div>

          <div className="container">
            <p className="subtitle text-center mb-5">
              What kind of account would you like to create?
            </p>

            <div className="d-flex justify-content-center">
              <div className="register-link-container d-flex justify-content-center">
                <Link to="/register/student" className="btn register-link">
                  Student
                </Link>
              </div>
              <div className="register-link-container d-flex justify-content-center">
                <Link to="/register/parent" className="btn register-link">
                  Parent
                </Link>
              </div>
              <div className="register-link-container d-flex justify-content-center">
                <Link to="/register/volunteer" className="btn register-link">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
