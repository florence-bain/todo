import { TodoItem } from "./todoitem";
import { TodoCollection } from "./todoCollection";

let todos = [
  new TodoItem(1, "Water plants"),
  new TodoItem(2, "Laundry"),
  new TodoItem(3, "Buy train tickets"),
  new TodoItem(4, "Call mum", true),
];

let collection = new TodoCollection("Florence", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
