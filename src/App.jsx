import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}>
          </Route>
        </Route>
        <Route
            path="/:id"
            element={<ProjectPage />}
          ></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
