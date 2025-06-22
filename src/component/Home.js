import Header from "./Header";
import "../Css/Home.css";

function Home() {
  return (
    <div className="home">
        <Header />
        <div className="home-content">
            <div className="home-item">
                <h2>Welcome to My Application</h2>
                <p>This is the home page of the application.</p>
                <p>Here you can find various features and functionalities.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;