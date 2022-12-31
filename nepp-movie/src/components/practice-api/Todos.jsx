import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const fetchTodos = async () => {
    /*
    let result = await fetch("http://localhost:4000/todos");
    let json = await result.json();
    setTodos(json);
    */
    let { data } = await axios.get("http://localhost:4000/todos");
    console.log("result : ", data);
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (!input) {
      alert("데이터를 등록하세요!");
      inputRef.current.focus();
      return;
    }

    /*
    try {
      let result = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: input, done: false }),
      });

      let json = await result.json();
      console.log("result", json);

      fetchTodos();
      setInput("");
    } catch (error) {
      console.log(error);
    }
    */
    let result = await axios
      .post("http://localhost:4000/todos", { title: input, done: false })
      .then((res) => {
        console.log(res);
        fetchTodos();
        setInput("");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = async (id, title, done) => {
    /*
    console.log(id + "/" + title + "/" + done);
    let result = await fetch("http://localhost:4000/todos/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, done: !done }),
    });

    console.log("result : ", result);
    fetchTodos();
    */

    let result = await axios
      .patch("http://localhost:4000/todos/" + id, { done: !done })
      .then((res) => {
        console.log(res);
        fetchTodos();
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleUpdate = async (id, title, done) => {
    console.log(id + "/" + title + "/" + done);
    let result = await fetch("http://localhost:4000/todos/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, done: !done }),
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  };

  const handleRemove = async (id, title, done) => {
    /*
    let result = await fetch("http://localhost:4000/todos/" + id, {
      method: "DELETE",
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log("error : ", e);
      });
      */
    let result = await axios
      .delete("http://localhost:4000/todos/" + id)
      .then((res) => {
        console.log(res);
        fetchTodos();
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={input}
        onChange={handleInput}
        ref={inputRef}
      ></input>
      &nbsp; <button onClick={handleSubmit}>등록</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span
              onClick={() => handleToggle(todo.id, todo.title + "1", todo.done)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
