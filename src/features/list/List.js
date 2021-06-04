import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del } from "./listSlice";
import "./List.css";

const List = () => {
  const [newList, setNewList] = useState("");
  const [id, setId] = useState(1);

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.TodoList.lists);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(add({ id: id, list: newList }));
    setId(id + 1);
    setNewList("");
  };
  const deleteTodo = ({ id }) => {
    dispatch(del(id));
  };
  return (
    <section id="todoList" className="todoList">
      <div className="container">
        <div className="section-title">Todo List</div>
        <form onSubmit={addTodo} className="todoList__form">
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            value={newList}
            placeholder="New Todo"
            className="todoInput"
            onChange={(e) => setNewList(e.target.value)}
            required
          />
          <button className="addTodo" type="submit">
            Add
          </button>
        </form>
        {lists &&
          lists.map((list) => (
            <div key={list.id} className="listItem">
              {list.list}
              <button
                className="delTodo"
                type="button"
                onClick={() => deleteTodo(list)}
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default List;
