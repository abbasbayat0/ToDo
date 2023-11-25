import GetInput from './GetInput.jsx';
import List from './List.jsx';
import { useState } from 'react';

const ToDoList = () => {
    const [showBlank, changeShowBlank] = useState(false);
    const [showList, changeShowList] = useState(false);
    const [toDoList, changeToDoList] = useState([]);
    const [newToDo, changeNewToDo] = useState('');
    console.log(toDoList)

    return (
        <>
            {/* header and controls */}
            <div className='w-96 h-16 bg-green-400 rounded-xl shadow-xl flex items-center absolute top-20'>
                {/* menu icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => changeShowList(!showList)} className="w-7 h-7 ml-5 hover:text-stone-200 transition-all cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/* the header title */}
                <p className='ml-28 font-sans font-medium select-none text-2xl'>To Do</p>

                {/* scroll guide */}
                {toDoList.length > 5 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 right-5 absolute text-gray-700 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>}
            </div>

            {/* main list */}
            <div className={`w-96 bg-slate-200 rounded-xl shadow-2xl absolute top-40 ${showList ? 'h-96' : 'h-0'} transtition duration-700 overflow-scroll`}>
                <List toDoList={toDoList} changeToDoList={changeToDoList} />
            </div>

            {/* add new button */}
            <input type='button' className={`bg-green-400 h-14 opacity-0 hover:text-stone-200 text-center absolute mt-32 w-0 top-96 shadow-2xl rounded-xl font-sans font-medium text-xl cursor-pointer ${showList ? 'w-56 opacity-100' : ''} transtition duration-1000`} onClick={() => changeShowBlank(true)} value='New One'>
            </input>

            {/* show a blank area and an input */}
            <GetInput showBlank={showBlank} changeShowBlank={changeShowBlank} toDoList={toDoList} changeToDoList={changeToDoList} newToDo={newToDo} changeNewToDo={changeNewToDo} />
        </>
    );
}
export default ToDoList;