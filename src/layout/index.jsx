import sbcLogo from "../assets/sbcLogo.png";

export default function Layout({ children }) {
  return (
    <div className="d-flex min-vh-100">
      <div className="col-3 dashboard">
        <img
          src={sbcLogo}
          alt="Sports Biz Camp logo"
          className="header-logo"
        ></img>
        <div className="mt-5 ms-3">
          <div className="text-white fw-bold mt-3">menu option 1</div>
          <div className="text-white fw-bold mt-3">menu option 2</div>
          <div className="text-white fw-bold mt-3">menu option 3</div>
        </div>
      </div>

      <div className="col-9">{children}</div>
    </div>
  );
}
