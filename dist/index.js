"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoitem_1.TodoItem(1, "Water plants"),
    new todoitem_1.TodoItem(2, "Laundry"),
    new todoitem_1.TodoItem(3, "Buy train tickets"),
    new todoitem_1.TodoItem(4, "Call mum", true),
];
let collection = new todoCollection_1.TodoCollection("Florence", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
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
        }
    });
}
promptUser();
