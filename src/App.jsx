import Navbar from "./componets/Navbar-Component";
import Card from "./componets/Card-Component";
import User from "./componets/User-Component";

function App() {
  const menus = ["Home", "About", "Contact"];

  return (
    <>
    <div style={{backgroundColor:
      "hsla(205, 24%, 16%, 1.00)",
     width:"100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // vertical center
  alignItems: "center",     // horizontal center
  minHeight: "100vh"        // full page height


      }}>
      <Navbar title="My Website" menus={menus} />

      <User
        name="Abdalsalam"
        email="abdu@gmail.com"
        role="Project manager "
      />

      <Card
        title="Users website"
        description="We provide good services to you"
        buttonText="Submit"
      />
      </div>
    </>
  );
}

export default App;
