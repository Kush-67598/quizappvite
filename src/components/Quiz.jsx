import React, { useState, useEffect } from 'react';

import data from './data';

const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sno, setSno] = useState(1);

    const [answer, setAnswer] = useState('')
    const [Result, setResult] = useState(0)

    const [userSelection, setUserSelection] = useState('')
    const [submit, setsubmit] = useState('Next')
    const [isAnswered, setIsAnswered] = useState(false)

    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)



    const handleAnswered = () => {
        if (isAnswered === false) {
            setIsAnswered(true)
        } else {
            setIsAnswered(false)
        }
    }

    const getbtnvalue = (selectedOption) => {
        if (selectedOption !== data[currentIndex].answer) {
            setAnswer(data[currentIndex].answer)
            setResult(Result - 100)
            setUserSelection(selectedOption)
            setWrong(wrong + 1)


        } else {
            setAnswer(data[currentIndex].answer)
            setResult(Result + 500)
            setUserSelection(selectedOption)
            setRight(right + 1)
        }

    };

    useEffect(() => {      //this changes the state of last question from next to submit 
        if (currentIndex === data.length - 1) {
            setsubmit('Submit');
        } else {
            setsubmit('Next');
        }
    }, [currentIndex]);   //this is the dependence array when any variable inside this changes use effect is triggered


    const NextButton = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSno(sno + 1);
            setAnswer('');
            setIsAnswered(false);
            setUserSelection('');
        } else {
            alert('Quiz ends');
            setQuizCompleted(true)
        }
    };



    return (
        <>
            <div className="container bg-black h-[100svh] w-[100svw] ">
    <div className='flex items-center'>
        <h2 className='font-bold text-lg text-white lg:text-4xl'>"The Ultimate Gaming Challenge: Can You Beat the Quiz?"</h2>
        <h2 className='text-white mx-2 font-bold'>Score&rarr; {Result}</h2>
    </div>
    <hr />
    <h1 className='text-white font-bold text-center text-3xl mt-8'>QUIZ&rarr;PUBG</h1>
    <div className="question py-2 text-center mt-8 mb-12 text-white font-bold text-x">
        {sno}. {data[currentIndex].question}
    </div>
    <div className="options grid grid-cols-2 gap-4 mx-3 m-2 ">
        {data[currentIndex].options.map((item) => (
            <button
                key={item}
                className='bg-red-600 w-full h-14 text-sm rounded-md font-bold text-white hover:border-2'
                onClick={() => { getbtnvalue(item); handleAnswered(); }}
                disabled={isAnswered}
            >
                {item}
            </button>
        ))}
    </div>
    <div className='flex flex-col items-center justify-center m-4'>
        <div className="answer py-2 text-white text-xl font-bold text-center">Your answer is &rarr; {userSelection}</div>
        <div className="answer py-2 text-white text-xl font-bold text-center">Correct Answer is &rarr; {answer}</div>
    </div>
    <div className='flex justify-around my-4'>
        <button className='bg-green-400 rounded-lg w-24 h-12 font-bold' onClick={() => { NextButton() }}>{submit} &rarr;</button>
    </div>
    <div className="main bg-black">
        <div className={`bg-slate-600 rounded-lg text-white my-12 font-bold mx-10 ${quizCompleted ? 'block' : 'hidden'}`}>
            <h2 className='text-center font-bold text-2xl m-2 underline'>RESULT</h2>
            <div className='py-2 px-4'>
                <h2>Total Question &rarr; {data.length}</h2>
                <h2>Correct &rarr; {right}</h2>
                <h2>Incorrect &rarr; {wrong}</h2>
                <h2>Not Attempted &rarr; {data.length - (right + wrong)}</h2>
            </div>
        </div>
    </div>
</div>

        </>
    );
};

export default Quiz;
