import { TodoItem } from "./todoitem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
  new TodoItem(1, "Water plants"),
  new TodoItem(2, "Laundry"),
  new TodoItem(3, "Buy train tickets"),
  new TodoItem(4, "Call mum", true),
];

let collection: TodoCollection = new TodoCollection("Florence", todos);

function displayTodoList(): void {
console.log(`${collection.userName}'s Todo List` 
+ `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());
}
enum Commands {
  Quit = "Quit"
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Choose option',
    choices: Object.values(Commands)
  }).then(answers => {
    if (answers['command'] !== Commands.Quit ) {
      promptUser();
    }
  })
}

promptUser();


