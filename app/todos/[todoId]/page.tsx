import React from "react";
import { Todo } from "../../../typings";

type PageProps = {
	params: {
		todoId: string;
	};
};

const fetchTodo = async (todoId: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`,
		{ next: { revalidate: 60 } }
	);

	const todo = await res.json();
	return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
	const todo: Todo = await fetchTodo(todoId);
	return (
		<div className="p-10 m-2 bg-yellow-200 border-2 shadow-lg">
			<p>
				#{todo.id}: {todo.title}
			</p>
			<p>Completed: {todo.completed ? "Yes" : "No"}</p>
			<p className="mt-5 text-right border-t border-black">
				By User: {todo.userId}
			</p>
		</div>
	);
}

export default TodoPage;

export async function generateStaticParams() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const todos: Todo[] = await res.json();

	const trimmedTodos = todos.splice(0, 10);

	return todos.map((todo) => ({
		todoId: todo.id.toString(),
	}));
}
