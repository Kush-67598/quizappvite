import React from "react";
import { Link } from "react-router-dom";


const PlayQuiz = () => {
  return (
    <> 
      <h2 className="bg-green-500 text-center font-bold text-2xl h-20 pt-4">Quizes</h2>
    <div className="bg-black pt-6 lg:grid grid-cols-3 ">
      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Sports Trivia</h2>
        <p className="text-white max-w-sm mx-4 my-2">
            Facts and records related to different sports and athletes.
        </p>

        <Link to="/Quizes/SportsTrivia">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>


      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Technology</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Topics covering advancements, gadgets, and tech pioneers.
         </p>

        <Link to="/Quizes/Technology">
          <button className="bg-black  text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>


      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Web Development</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Identify technologies and concepts used to build and manage websites.
        </p>

        <Link to="/Quizes/WebDev">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>

      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">GameGk</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Test knowledge on various game mechanics
        </p>

        <Link to="/Quizes/Games">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>
      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Science Frenzy</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Explore the wonders of science and technology, from biology and chemistry to physics and astronomy.        </p>
        <Link to="/Quizes/Science">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>
      
      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Math Mayhem</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Test your problem-solving skills in a quiz about mathematics, from basic arithmetic to advanced calculus.        </p>
        <Link to="/Quizes/MathsMayhem">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>

      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Psychology Puzzle</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Unravel the mysteries of the human mind, from cognitive biases to psychological theories.        </p>
        <Link to="/Quizes/Psychology ">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>

      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Fitness and Exercise </h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Analyze the importance of fitness and exercise, from physiology to nutrition.</p>
        <Link to="/Quizes/Fitness">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>

      <div className="bg-yellow-400 mx-10 my-12 h-48 rounded-lg flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-3xl my-2">Cybersecurity Threats</h2>
        <p className="text-white max-w-sm mx-4 my-2">
        Test knowledge on various game mechanics
        </p>
        <Link to="/Quizes/Cybersecurity">
          <button className="bg-black text-white w-12 rounded-md font-bold text-md h-8">
            Play
          </button>
        </Link>
      </div>

      </div>
    </>
  );
};

export default PlayQuiz;
