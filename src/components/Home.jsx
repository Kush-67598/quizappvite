import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  const message = () => {
    alert("1.  500 PTS FOR CORRECT ANSWER \n 2. -100 PTS FOR INCORRECT ANSWER");
  };

  return (
    <>
      <div className="bg-yellow-400 h-[100vh] flex flex-col items-center lg:w-[100vw] ">
        <h1 className=" bg-black text-xl font-bold font-mono text-white text-center my-4 rounded-md px-2">
        QuizMaster: Explore & Compete
        </h1>

        <div className="bg-white h-[100vh] text-center py-4 lg: ">
          <p className=" text-lg font-mono font-light py-5 px-8 text-left">
          QuizMaster: Explore & Compete is your ultimate quiz companion! Whether you're a trivia enthusiast, a knowledge seeker, or just looking for some fun, QuizMaster offers a vast array of quizzes across multiple categories. With our user-friendly interface, you can easily browse, select, and compete in quizzes on topics ranging from science and history to pop culture and sports.
          </p>
          <h3 className="bg-red-500 font-bold text-white py-4 text-xl ">Features</h3>

         <ul className="flex flex-col bg-green-200 h-[53vh]">
          <li className="text-left mx-2 py-4 text-lg">&bull;<span className="font-bold text-xl">Diverse Categories:</span> Explore quizzes across various subjects including Science, Technology, History, Psychology, Fitness, Mathematics, and more.</li>
          <li className="text-left mx-2 text-lg py-4">&bull;<span className="font-bold text-xl">Play Anytime, Anywhere:</span>  Enjoy quizzes on the go or from the comfort of your home.</li>
          <li className="text-left mx-2 text-lg py-4">&bull;<span className="font-bold text-xl">Challenging Questions:</span>  Test your knowledge with questions designed to challenge and engage.s</li>
          
          
         </ul>
          <Link to="/Quizes">
            <div className="bg-green-200 lg:py-6">
            <button
              className="bg-black rounded-md w-32 h-12 font-bold text-white hover:bg-gray-600 hover:text-black "
            >
              PLAY QUIZ&rarr;
            </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
