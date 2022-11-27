import "./App.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  function apiRoute() {
    axios
      .get("http://localhost:4000/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  async function protectedApiRoute() {
    try {
      const token = await getAccessTokenSilently();
      // console.log(token);
      const response = await axios.get("http://localhost:4000/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="App">
      <h1>Yash Varshney</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>login With Popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>login With redirec</button>
        </li>
        <li>
          <button onClick={logout}>login With logout</button>
        </li>
      </ul>
      <h3>User is {isAuthenticated ? "logged in " : "not logged in"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
      <ul>
        <li>
          <button onClick={apiRoute}>Call Api Route</button>
        </li>
        <li>
          <button onClick={protectedApiRoute}>Call Protected Api Route</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
