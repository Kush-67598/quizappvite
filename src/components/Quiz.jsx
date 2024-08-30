import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Quiz = ({ data, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sno, setSno] = useState(1);
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState(0);
    const [userSelection, setUserSelection] = useState('');
    const [submit, setSubmit] = useState('Next');
    const [isAnswered, setIsAnswered] = useState(false);
    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswered = () => {
        setIsAnswered(!isAnswered);
    };

    const getBtnValue = (selectedOption) => {
        if (selectedOption !== data[currentIndex].answer) {
            setAnswer(data[currentIndex].answer);
            setResult(result - 100);
            setUserSelection(selectedOption);
            setWrong(wrong + 1);
        } else {
            setAnswer(data[currentIndex].answer);
            setResult(result + 500);
            setUserSelection(selectedOption);
            setRight(right + 1);
        }
    };

    useEffect(() => {
        if (currentIndex === data.length - 1) {
            setSubmit('Submit');
        } else {
            setSubmit('Next');
        }
    }, [currentIndex]);

    const nextButton = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSno(sno + 1);
            setAnswer('');
            setIsAnswered(false);
            setUserSelection('');
        } else {
            alert('Quiz ends');
            setQuizCompleted(true);
            
        }
    };

    return (
        <div className="container bg-black h-screen w-full lg:h-[90vh] lg:w-full overflow-x-hidden">
            <div className='flex items-center justify-between p-4'>
                <h2 className='font-bold text-lg text-white lg:text-4xl'>{`The Ultimate ${title} Challenge: Can You Beat the Quiz?`}</h2>
                <span className='text-white font-bold text-xl'>{`Questions: ${currentIndex + 1}/${data.length}`}</span>
            </div>
            <hr />
            <h1 className='text-white font-bold text-center text-3xl mt-8'>QUIZ &rarr; {title}</h1>
            <div className="question py-2 text-center mt-8 mb-12 text-white font-bold text-x">
                {sno}. {data[currentIndex].question}
            </div>
            <div className="options grid grid-cols-2 gap-4 mx-3">
                {data[currentIndex].options.map((item) => (
                    <button
                        key={item}
                        className='bg-red-600 w-full h-36 text-sm rounded-md font-bold text-white hover:border-2'
                        onClick={() => { getBtnValue(item); handleAnswered(); }}
                        disabled={isAnswered}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='flex flex-col items-center justify-center mt-16'>
                <div className="answer py-2 text-white text-xl font-bold text-center">Your answer is &rarr; {userSelection}</div>
                <div className="answer py-2 text-white text-xl font-bold text-center">Correct Answer is &rarr; {answer}</div>
            </div>
            <div className='flex justify-around my-4'>
                <button className='bg-green-400 rounded-lg w-24 h-12 font-bold' onClick={nextButton}>{submit} &rarr;</button>
            </div>

            <Link to="/Result">
            <div className="result bg-black">
                <div className={`bg-slate-600 rounded-lg text-white my-12 font-bold mx-10 ${quizCompleted ? 'block' : 'hidden'}`}>
                    <h2 className='text-center font-bold text-2xl m-2 underline'>RESULT</h2>
                    <div className='py-2 px-4'>
                        <h2 className='text-white font-bold'>Your Score is &rarr; {result}</h2>
                        <h2>Total Questions &rarr; {data.length}</h2>
                        <h2>Correct &rarr; {right}</h2>
                        <h2>Incorrect &rarr; {wrong}</h2>
                        <h2>Not Attempted &rarr; {data.length - (right + wrong)}</h2>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Quiz;
