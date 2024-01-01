import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<News pageSize="9" category="general" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/business"
          element={<News pageSize="9" category="business" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/entertainment"
          element={<News pageSize="9" category="entertainment" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/health"
          element={<News pageSize="9" category="health" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/science"
          element={<News pageSize="9" category="science" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/sports"
          element={<News pageSize="9" category="sports" />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/technology"
          element={<News pageSize="9" category="technology" />}
        />
      </Routes>
    </>
  );
}

export default App;
