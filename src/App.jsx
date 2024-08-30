import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PlayQuiz from "./components/PlayQuiz";
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Sports from "./components/QuizesData/Sportsdata";
import WebDev from "./components/QuizesData/WebDev";
import Technology from "./components/QuizesData/Techdata";
import Games from "./components/QuizesData/Games";
import Cybersecurity from "./components/QuizesData/Cybersecurity";
import Fitness from "./components/QuizesData/Fitness";
import Mathematics from "./components/QuizesData/Math"
import Psychology from "./components/QuizesData/Psychology";
import Science from "./components/QuizesData/Science";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Quizes' element={<PlayQuiz/>}></Route>
          <Route exact path='/Quizes/SportsTrivia' element={<Quiz data={Sports} title='Sports' />}></Route>
          <Route exact path='/Quizes/WebDev' element={<Quiz data={WebDev} title='WebDevelopment' />}></Route>
          <Route exact path='/Quizes/Games' element={<Quiz data={Games} title='Games' />}></Route>
          <Route exact path='/Quizes/Technology' element={<Quiz data={Technology} title='Tech' />}></Route>
          <Route exact path='/Quizes/Science' element={<Quiz data={Science} title='Science' />}></Route>
          <Route exact path='/Quizes/MathsMayhem' element={<Quiz data={Mathematics} title='Maths' />}></Route>
          <Route exact path='/Quizes/Psychology' element={<Quiz data={Psychology} title='Psychology' />}></Route>
          <Route exact path='/Quizes/Fitness' element={<Quiz data={Fitness} title='Fitness' />}></Route>
          <Route exact path='/Quizes/Cybersecurity' element={<Quiz data={Cybersecurity} title='Cybersecurity' />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
