import "./CSS/TodoItems.css";
import tick from "./assets/tick.png";
import cross from "./assets/cross.png";
import no_tick from "./assets/no_tick.png";

const TodoItems = ({ no, display, text, SetTodos }) => {
  const deletetodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    SetTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    SetTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={no_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todo-item-text">{text}</div>
      </div>
      <img
        className="todocross"
        onClick={() => {
          deletetodo(no);
        }}
        src={cross}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
