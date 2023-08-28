// import { Liquid } from "liquidjs";
const engine = new liquidjs.Liquid(); // imports liquidjs engine mannually since firefox gives an error "MIME"
const result = document.querySelector("#result"); // selects where to insert the new html body

// fetch the .liquid template
const template = await fetch("../templates/project.liquid").then((response) => {
  return response.text();
});

// fetch the .json project object
const obj = await fetch("../json/projects.json").then((response) => {
  return response.json();
});

// renders the objects inside the DOM
engine.parseAndRender(template, obj).then((html) => {
  result.innerHTML = html;
});
