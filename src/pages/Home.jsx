import Header from "../components/Header";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="min-vh-100 ">
        <Header />
        <div className="d-flex align-items-center px-5">
          <div className="title-container">
            <h1 className="homepage-title">SPORTS BIZ CAMPS</h1>
            <p className="description">
              Changing the lives of underrepresented high school and college
              students through the sports business.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
