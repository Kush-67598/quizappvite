import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  const message = () => {
    alert("1.  500 PTS FOR CORRECT ANSWER \n 2. -100 PTS FOR INCORRECT ANSWER");
  };

  return (
    <>
      <div className="bg-yellow-400 h-[100vh] flex flex-col  items-center  ">
        <h1 className=" bg-black text-lg font-bold font-mono text-white text-center my-2 rounded-md">
          Ultimate Gamer Quiz: Prove Your Gaming Knowledge
        </h1>

        <div className="bg-white w-[90vw] rounded-lg h-[100vh] text-center py-4 ">
          <p className=" text-lg font-mono font-light py-6">
            Welcome, gamers! This is your chance to showcase just how well you
            know the world of gaming. Whether you're a veteran of pixelated
            classics or a master of the latest releases, this quiz will
            challenge your knowledge across a broad spectrum of gaming trivia.
            From iconic characters to legendary game mechanics, get ready to
            dive deep into your gaming expertise. Sharpen your wits, hit start,
            and let’s see if you have what it takes to score top marks! Good
            luck!
          </p>
          <Link to="/QuizArea">
            <button
              className="bg-black rounded-md w-32 h-12 font-bold text-white hover:bg-gray-600 hover:text-black "
              onClick={() => message()}
            >
              PLAY QUIZ&rarr;
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
