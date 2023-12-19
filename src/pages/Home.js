// afbeeldingen
import placeHolder from "../assets/placeholder.png";
import newTicketlogo from "../assets/ticket.png";
import ongoingProjectlogo from "../assets/ongoing.png";

const Home = () => {
  return (
    <>
      <main>
        <section className="projects">
          <h2>
            <img src={ongoingProjectlogo} alt=""></img>Ongoing projects
          </h2>
          <div className="card-wrapper">
            <article>
              <img src={placeHolder} alt=""></img>
              <p>
                <h3>Artis</h3>
                <span>Visual Design</span>
              </p>
            </article>
            <article>
              <p>
                <h3>Artis</h3>
                <span>Visual Design</span>
              </p>
              <img src={placeHolder} alt="placeholder"></img>
            </article>
            <article>
              <img src={placeHolder} alt="placeholder"></img>
              <p>
                <h3>Artis</h3>
                <span>Visual Design</span>
              </p>
            </article>
          </div>
        </section>
        <section className="new-tickets">
          <h2>
            <img src={newTicketlogo} alt=""></img>New Tickets
          </h2>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </section>
      </main>
    </>
  );
};

export default Home;
