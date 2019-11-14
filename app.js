const inquirer = require("inquirer");
// const fs = require("fs");
// const generateHTML = require("./generateHTML");

// load specific employee type classes
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const questions = require("./lib/questions")

const test = true;


// use inquire to ask general employee questions
const askGenEmpl = () => {
  if (test) console.log("entered: askGenEmpl", questions.general);
  return inquirer.prompt(questions.general);
};

// use inquire to ask intern specific employee questions
const askIntEmpl = () => {
  if (test) console.log("entered: askIntEmpl", questions.intern);
  return inquirer.prompt(questions.intern);
};

// use inquire to ask engineer specific employee questions
const askEngEmpl = () => {
  if (test) console.log("entered: askEngEmpl", questions.engineer);
  return inquirer.prompt(questions.engineer);
};

// use inquire to ask manager specific employee questions
const askManEmpl = () => {
  if (test) console.log("entered: askManEmpl", questions.manager);
  return inquirer.prompt(questions.manager);
};

async function init() {
  if (test) console.log("started init:");
  // array in which to store employees
  const teamList = [];
  // const ansRoleEmpl;
  let employee;

  // will need to wrap this in a loop for n-employees
  try {
    const ansGenEmpl = await askGenEmpl();
    // maybe these should be in the employee class?
    if (test) console.log("try got general:", ansGenEmpl);

    const email = `${ansGenEmpl.lastName}@company.com`;
    // need id generator
    const id = 123;

    switch (ansGenEmpl.role) {
      case 'Intern':
        ansRoleEmpl = await askIntEmpl();
        employee = new Intern (ansGenEmpl.name,id,email,ansRoleEmpl.school);
        break;
      case 'Engineer':
        ansRoleEmpl = await askEngEmpl();
        employee = new Engineer (ansGenEmpl.name,id,email,ansRoleEmpl.github);
        break;
      case 'Manager':
        ansRoleEmpl = await askManEmpl();``
        employee = new Manager (ansGenEmpl.name,id,email,ansRoleEmpl.officeNumber);
        break;
    }


    // const page = generateHTML(data, responseArr);
  } catch (error) {
    console.log(`There was a problem ${error}`);
  }
}

init();