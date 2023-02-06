import "./App.css";
import GetStudents from "./components/GetStudents";
import Heading from "./components/Heading";
import StudentsList from "./components/StudentsList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div>
        <GetStudents />
        <StudentsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
