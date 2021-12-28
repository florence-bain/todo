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
let showCompleted = true;

function displayTodoList(): void {
console.log(`${collection.userName}'s Todo List` 
+ `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
enum Commands {
  Add = "Add New Task",
  Toggle = "Show/Hide Completed",
  Quit = "Quit"
}

function promptAdd(): void {
  console.clear();
  inquirer.prompt({ type: "input", name: "add", message: "Enter a new task"})
    .then(answers => {if (answers["add"] !== "") {
      collection.addTodo(answers["add"]);
    }
    promptUser();
  })
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
    //badPropertry: true
  }).then(answers => {
    switch (answers["command"]) {
      case Commands.Toggle:
        showCompleted = !showCompleted;
        promptUser();
        break;
        case Commands.Add:
        promptAdd();
        break;
    }
  })
}

promptUser();


