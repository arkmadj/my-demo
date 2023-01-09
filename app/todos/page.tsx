import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const todos: Todo[] = await res.json();
	return todos;
};

function Todos() {
	return <div>Todos</div>;
}

export default Todos;
