import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';
import tick from './Assets/tick.png';
import './CSS/TodoItems.css';

const TodoItems = ({ no, display, text, setTodos }) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }


    const toggleDisplay = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));

        for (let i = 0; i < data.length; i++) {

            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                }
                else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }

    return (
        <div className="todoitems">
            <div className={`todoitems_container ${display}`} onClick={() => { toggleDisplay(no) }} >
                {display === "" ? <img src={not_tick} alt='umarked' /> : <img src={tick} alt='marked' />}
                <div className="todoitems_text">{text}</div>
            </div>
            <img className='todoitems_cross_icon' onClick={() => { deleteTodo(no) }} src={cross} alt='cross image' />
        </div>
    )
}

export default TodoItems