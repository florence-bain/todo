"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoitem_1.TodoItem(1, "Water plants"),
    new todoitem_1.TodoItem(2, "Laundry"),
    new todoitem_1.TodoItem(3, "Buy train tickets"),
    new todoitem_1.TodoItem(4, "Call mum", true),
];
let collection = new todoCollection_1.TodoCollection("Florence", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();
collection.getTodoItems(true).forEach((item) => item.printDetails());
