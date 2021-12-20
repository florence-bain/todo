import { TodoItem } from "./todoitem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Water plants"),
  new TodoItem(2, "Laundry"),
  new TodoItem(3, "Buy train tickets"),
  new TodoItem(4, "Call mum", true),
];

let collection: TodoCollection = new TodoCollection("Florence", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);
todoItem.printDetails();

//collection.addTodo(todoItem);
