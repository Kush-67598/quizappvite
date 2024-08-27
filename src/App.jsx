import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
    <Route exact path='/' element={<Home/>}> </Route>
    <Route exact path='/QuizArea' element={<Quiz />}> </Route>
    {/* <Route exact path='/Result' element={<Result/>}> </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
