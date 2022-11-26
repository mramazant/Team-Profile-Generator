//decleration
const getGeneratedHTML = require("./src/html-template")
const inquirer = require("inquirer")
const fs = require("fs")


inquirer.prompt ([
    {
    type: "input",
    message: "What is manager's name?",
    name: "managerName"
},
{
    type: "input",
    message: "What is manager's ID?",
    name: "managerID"  
},
    {
    type: "input",
    message: "What is manager's e-mail?",
    name: "managerMail"
},
    {
    type: "input",
    message: "What is manager's office number?",
    name: "managerOffice"
},
    {
    type: "list",
    choices : ["Engineer", "Intern", "Finish building my team"],
    message: "Select an option to add member",
    name: "selectMember"
},
    {
    type: "input",
    message: "What is engineer's name?",
    name: "engineerName"
},
    {
    type: "input",
    message: "What is engineer's ID?",
    name: "engineerID"
},
    {
    type: "input",
    message: "What is engineer's e-mail?",
    name: "egnineerMail"
},
    {
    type: "input",
    message: "What is engineer's GitHub?",
    name: "engineerGitHub"
},
    {
    type: "input",
    message: "What is inern's name?",
    name: "internName"
},
    {
    type: "input",
    message: "What is inern's ID?",
    name: "internID"
},
    {
    type: "input",
    message: "What is intern's e-mail?",
    name: "internMail"
},
    {
    type: "input",
    message: "What is intern's GitHub?",
    name: "internGitHub"
}
])
.then ((response) => {
    console.log(response)
    var memberInfo = `<div class="memberInfo">
            <div class="managerName"></div>
            <div class="managerID"><h1>Intern ID: ${response.internID}</h1></div>
            <div class="managerMail"></div>
            <div class="managerOffice"></div>
        </div>`
    //change file to dist/index.html
    fs.writeFile("output/team.html", getGeneratedHTML(internID), (error) =>
    error ? console.log(error) : console.log("Succesfull"));
})






