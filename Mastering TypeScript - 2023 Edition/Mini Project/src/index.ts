interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("input")! as HTMLInputElement;
const form = document.getElementById("form")! as HTMLFormElement;
const list = document.getElementById("list")! as HTMLUListElement;

const readTodos = (): Todo[] => {
  const todosJson = localStorage.getItem("todos");
  if (todosJson) {
    return JSON.parse(todosJson);
  }

  return [];
};

const saveTodos = (): void =>
  localStorage.setItem("todos", JSON.stringify(todos));

const createTodo = (todo: Todo): void => {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
};

form.addEventListener("submit", (ev: SubmitEvent) => {
  ev.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);

  input.value = "";
  saveTodos();
});

const todos: Todo[] = readTodos();

for (const todo of todos) {
  createTodo(todo);
}
