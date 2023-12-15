import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>UNC INC</h1>
        <a href="/">menu</a>
      </header>
      <form action="/">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
