// afbeeldingen
import profilePicture from "../assets/me.better.jpg";

const Dashboard = () => {
  return (
    <>
      <main>
        <section className="grid-container">
          <div className="profile">
            {/* <img src={profilePicture} alt="youssra presenting on laptop"></img> */}
          </div>
          <div className="project"></div>
          <div className="content"></div>
          <div className="aside"></div>
          <div className="footer"></div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
