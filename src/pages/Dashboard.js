import React from "react";
import { useAuth } from "../AuthContext";
// met useAuth kan ik controleren of een gebruiker ingeglogd of niet is
// Daarna kan ik bepalen hoe de pagina hier op kan reageren
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // is de bezoeker ingelogd dan kan hij naar het dashboard
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <>
      {/* wel ingelogd krijgt bezoeker dashboard pagina te zien */}
      {loggedIn ? (
        <main>
          <section className="grid-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </main>
      ) : (
        <p>you need to login first to enter this page.</p>
      )}
    </>
  );
};

export default Dashboard;
