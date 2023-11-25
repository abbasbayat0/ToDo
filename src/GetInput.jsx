/* eslint-disable react/prop-types */
const GetInput = (props) => {
    return (
        <div className="flex justify-center items-center">
            {/* blank area to get input */}
            <div className={`w-screen h-screen flex justify-center items-center transition-all duration-1000 bg-green-300 ${props.showBlank ? 'opacity-70 z-10' : 'opacity-0 -z-10'}`} onClick={() => props.changeShowBlank(false)}>
            </div>
            <input type="text" maxLength={24} placeholder='Write And Enter' className={`fixed z-20 text-center font-sans text-xl font-medium h-20 outline-none focus:shadow-xl rounded-xl placeholder:text-center ${props.showBlank ? 'w-1/3' : 'w-0'} transition-all duration-700`} onChange={(e) => {
                props.changeNewToDo(e.target.value);
            }} onKeyUp={(e) => {
                if(e.keyCode === 13){
                    const newToDo = {name: props.newToDo, id: props.toDoList.length ? props.toDoList[props.toDoList.length - 1].id + 1 : 1, isComplete: false}
                    props.changeToDoList([...props.toDoList, newToDo]);
                    e.target.value = '';
                    props.changeShowBlank(false)
                }
            }} />
        </div>
    );
}
export default GetInput;