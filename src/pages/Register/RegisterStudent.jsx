// import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function RegisterStudent() {
  //   let navigate = useNavigate();

  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     return navigate(-1);
  //   }

  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-row sign-up__main p-md-5">
        <div className="container container-main p-5 col-12 col-lg-8 shadow rounded bg-white">
          <div className="container my-5">
            <h1 className="text-center">Register a new account</h1>
          </div>

          <h3 className="fs-6 fw-bold mb-3">Personal info</h3>

          <form className="row g-3">
            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First name"
              />

              <label htmlFor="first-name" className="form-label ms-1">
                First name
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last name"
              />

              <label htmlFor="last-name" className="form-label ms-1">
                Last name
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
              />
              <label htmlFor="age" className="form-label ms-1">
                Age
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <select
                className="form-select form-select__container"
                aria-label="Default select example"
              >
                <option value="selected">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="">Non-binary</option>
                <option value="">Prefer not to say</option>
              </select>
            </div>

            <h3 className="fs-6 fw-bold mt-4">Address</h3>

            <div className="col-md-6 form-floating">
              <select
                className="form-select form-select__container"
                aria-label="Default select example"
              >
                <option value="selected">Country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
              </select>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="street-address"
                placeholder="Street Address"
              />

              <label htmlFor="street-address" className="form-label ms-1">
                Street Address
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
              />

              <label htmlFor="city" className="form-label ms-1">
                City
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="State / Province"
              />

              <label htmlFor="state" className="form-label ms-1">
                State / Province
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="number"
                className="form-control"
                id="zip"
                placeholder="Zip / Postal Code"
              />
              <label htmlFor="zip-code" className="form-label ms-1">
                Zip / Postal Code
              </label>
            </div>

            <h3 className="fs-6 fw-bold mt-4">Education</h3>

            <div className="col-md-6 form-floating">
              <input
                type="text"
                className="form-control"
                id="school"
                placeholder="School"
              />

              <label htmlFor="school" className="form-label ms-1">
                School
              </label>
            </div>

            <div className="col-md-6 form-floating">
              <div>
                <h3 className="form-text">Please select type of school.</h3>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="highschool"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    High School
                  </label>
                </div>
                <div className="form-check mx-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="college"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    College
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-6 form-floating">
              <select
                className="form-select form-select__container"
                aria-label="Default select example"
              >
                <option value="selected">Grade</option>
                <option value="freshman">Freshman</option>
                <option value="sophmore">Sophmore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="senior">Other</option>
              </select>
            </div>

            <div className="col-md-6 form-floating">
              <input
                type="number"
                className="form-control"
                id="grad-year"
                placeholder="Graduation year"
              />

              <label htmlFor="grad-year" className="form-label ms-1">
                Graduation year
              </label>
            </div>

            <h3 className="fs-6 fw-bold mt-4">Contact info</h3>

            <div className="form-floating col-md-6">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
              />
              <label htmlFor="email-address" className="form-label px-3">
                Email address
              </label>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="form-floating col-md-6">
              <input
                type="tel"
                className="form-control"
                id="phone-number"
                placeholder="Phone number"
              />
              <label htmlFor="phone-number" className="form-label ms-1">
                Phone number
              </label>
            </div>

            <div className="pt-3">
              <div>
                <h3 className="fs-6 fw-bold">Contact Preferences</h3>
                <p className="form-text">
                  Please select your preferred method of contact.
                </p>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Email
                  </label>
                </div>
                <div className="form-check mx-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Phone call
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="text-message"
                    id="text-message"
                  />
                  <label className="form-check-label" htmlFor="text-message">
                    Text message
                  </label>
                </div>
              </div>
            </div>

            <h3 className="fs-6 fw-bold mt-4">Additional info</h3>

            <div className="form-floating col-md-6">
              <input
                type="text"
                className="form-control"
                id="organization-name"
                placeholder="Organization name"
              />
              <label htmlFor="organization-name" className="form-label">
                Organization name
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
