const List = (props) => {
    const handelComplete = (id) => {
        const newToDoList = props.toDoList.map(toDo => {
            if(toDo.id === id) return {...toDo, isComplete: true}
            else return toDo;
        })
        props.changeToDoList(newToDoList)
    };
    const handleDelete = (id) => {
        props.changeToDoList(props.toDoList.filter(toDo => toDo.id !== id))
    };
    return (
        props.toDoList.map((toDo, index) => {
            return (
                <div key={index} className={`rounded-lg w-11/12 ${toDo?.isComplete ? 'bg-gray-300' : 'bg-gray-400'} m-auto flex items-center relative top-4 p-5 mb-8 transition duration-500`}>
                    {/* the title of to do */}
                    <p className={`text-xl ${toDo?.isComplete ? 'text-gray-600 line-through' : 'text-black'} font-sans left-4 absolute`}>{toDo?.name}</p>

                    {/* tick icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => handelComplete(toDo?.id)} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${toDo?.isComplete ? 'text-green-500' : 'text-black'} right-14 absolute cursor-pointer hover:text-green-500 transition-all duration-200`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    {/* trash icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDelete(toDo?.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 cursor-pointer ${toDo?.isComplete ? 'text-red-300' : 'text-black'} hover:text-red-500 transition-all duration-200 absolute right-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            );
        })
    );
}
export default List;