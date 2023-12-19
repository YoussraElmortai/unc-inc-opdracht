// afbeeldingen
import profilePicture from "../assets/me.better.jpg";

const Dashboard = () => {
  return (
    <>
      <main>
        <section className="grid-container">
          <div>
            <img src={profilePicture} alt="youssra presenting on laptop"></img>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
