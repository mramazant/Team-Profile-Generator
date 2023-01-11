//decleration
const getGeneratedHTML = require("./src/html-template");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const teamMembers = [];
//main menu
selectTeamMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        choices: ["Engineer", "Intern", "Finish building my team"],
        message: "Select an option to add member",
        name: "selectMember",
      },
    ])
    .then((data) => {
      switch (data.selectMember) {
        case "Engineer":
          selectEngineer();
          break;
        case "Intern":
          selectIntern();
          break;
        default:
          finishBuildingTeam();
          break;
      }
    });
};
//selecting engineer
selectEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is engineer's ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is engineer's e-mail?",
        name: "engineerMail",
      },
      {
        type: "input",
        message: "What is engineer's GitHub?",
        name: "engineerGitHub",
      },
    ])
    .then((data) => {
      console.log(data);
      const engineer = new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerMail,
        data.engineerGitHub
      );
      console.log(engineer.getRole());
      teamMembers.push(engineer);
      selectTeamMembers();
    });
};
//selecting Intern
selectIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is intern's ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is intern's e-mail?",
        name: "internMail",
      },
      {
        type: "input",
        message: "What is intern's School?",
        name: "internSchool",
      },
    ])
    .then((data) => {
      console.log(data);
      const intern = new Intern(
        data.internName,
        data.internID,
        data.internMail,
        data.internSchool
      );
      console.log(intern.getRole());
      teamMembers.push(intern);
      selectTeamMembers();
    });
};
//selecting Manager
selectManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is manager's ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is manager's e-mail?",
        name: "managerMail",
      },
      {
        type: "input",
        message: "What is manager's office number?",
        name: "managerOffice",
      },
    ])
    .then((data) => {
      console.log(data);
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerMail,
        data.managerOffice
      );
      console.log(manager.getRole());
      teamMembers.push(manager);
      selectTeamMembers();
    });
};
selectManager();
//to ending the application
finishBuildingTeam = () => {
  let output = "";
  console.log(teamMembers);
  teamMembers.forEach((employee, index) => {
    console.log(employee.getName(), employee.getRole());
    //for non-common information
    var additionalInfo = ``;
    switch (employee.getRole()) {
      case "Engineer":
        additionalInfo = `<div class="addInfo"><h3>Github: ${employee.getGitHub()}</h3></div>`;
        break;
      case "Intern":
        additionalInfo = `<div class="addInfo"><h3>School: ${employee.getSchool()}</h3></div>`;
        break;
      case "Manager":
        additionalInfo = `<div class="addInfo"><h3>OfficeNumber: ${employee.officeNumber}</h3></div>`;
        break;
    }
    //context of html file
    var memberInfo = `<div class="memberInfo">
            <div class="memberRole"><h1>${employee.getRole()}</h1></div>
            <div class="memberName"><h3>Name: ${employee.getName()}</h3></div>
            <div class="memberID"><h3>ID: ${employee.getId()}</h3></div>
            <div class="memberMail"><h3>Mail: ${employee.getEmail()}</h3></div>
            ${additionalInfo}
        </div>`;
    output += memberInfo;
  });
  console.log(output);
  processHTML(output);
};
//creating html file
processHTML = (memberInfo) => {
  //change file to dist/index.html
  fs.writeFile("dist/index.html", getGeneratedHTML(memberInfo), (error) =>
    error ? console.log(error) : console.log("Succesfull")
  );
};
