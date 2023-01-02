import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddStudent from "./pages/AddStudent";
import { Route, Routes } from "react-router-dom";
import StudentList from "./pages/StudentList";
import EditStudent from "./pages/EditStudent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </>
  );
}

export default App;
