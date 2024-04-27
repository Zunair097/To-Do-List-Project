#! usr/bin/env node

import inquirer from "inquirer";

let todoList: string [] = [];
let conditions = true;

console.log("\n \t Welcome To The Governor Initiative Program-Todo List Project\n");

// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: "Enter Your New Task: "
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added In Todo-List Succesfully!`);
    
//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addMore",
//             type: "confirm",
//             message: "Do You Want To Add More Tasks ?",
//             default: "false"
//         }
//     ]);
//     conditions = addMoreTask.addMore
// }
// console.log(`Your Updated Todo-List: (${todoList})`);

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select An Option You Want To Do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}

// Function To Add New Tasks In The Todo-List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task: "
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task Added Successfully IN The Todo-list`);
}

// Function To View All Todo List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
}

// Function To Delete A Task From The List
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The 'Index No.' You Want To Delete",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This Task Has Been Deleted Successfully From The Todo-List`);
}
// Function To Update A Task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The 'Index No.' Of The Task You Want To Update: ",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter The New Task Name: ",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task At Inex No. ${update_task_index.index - 1} Updated Successfully [For Updated List Check "View Todo-List"]`);
    
}


main();


