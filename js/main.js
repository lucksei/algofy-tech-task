const dropBtn = qs("[data-id=drop-btn]");
const dropHomeBtn = qs("[data-id=drop-home-btn]");
const dropAboutBtn = qs("[data-id=drop-about-btn]");
const dropProjectsBtn = qs("[data-id=drop-projects-btn]");
const dropContactBtn = qs("[data-id=drop-contact-btn]");
const homeBtn = qs("[data-id=home-btn]");
const aboutBtn = qs("[data-id=about-btn]");
const projectsBtn = qs("[data-id=projects-btn]");
const contactBtn = qs("[data-id=contact-btn]");
const expandBtn = qs("[data-id=expand-btn]");

const dropdownMenu = qs("[data-id=dropdown]");
const aboutText = qs("[data-id=about-text");

// event listeners

dropBtn.addEventListener("click", (event) => {
  toggleMenu();
});

dropHomeBtn.addEventListener("click", (event) => {
  jumpAnchor("hero-section");
});

dropAboutBtn.addEventListener("click", (event) => {
  jumpAnchor("about-section");
});

dropProjectsBtn.addEventListener("click", (event) => {
  jumpAnchor("projects-section");
});

dropContactBtn.addEventListener("click", (event) => {
  jumpAnchor("contact-section");
});

homeBtn.addEventListener("click", (event) => {
  jumpAnchor("hero-section");
});

aboutBtn.addEventListener("click", (event) => {
  jumpAnchor("about-section");
});

projectsBtn.addEventListener("click", (event) => {
  jumpAnchor("projects-section");
});

contactBtn.addEventListener("click", (event) => {
  jumpAnchor("contact-section");
});

let expanded = false;
expandBtn.addEventListener("click", (event) => {
  toggleExpand(expanded);
  expanded = expanded ? false : true;
  //   console.log(expanded);
});

// functions

function toggleMenu() {
  dropdownMenu.classList.toggle("hidden");
}

function jumpAnchor(anchor) {
  var node = document.getElementById(anchor);
  //   console.log(node);
  node.scrollIntoView({ behavior: "smooth" }, true);

  //   window.scrollTo({
  //     top: node.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   window.location.href = anchor;
}

// function toggleExpand(expanded) {
//   const node = document.createElement("p");
//   if (expanded) {
//     node.innerText = aboutShort;
//   } else {
//     node.innerText = aboutLong;
//   }
//   aboutText.replaceChildren(node);
//   console.log(node);
//   console.log(aboutText);
// }

// query selector helper

function qs(selector) {
  const el = document.querySelector(selector);

  if (!el) {
    throw new Error("Could not find elements" + selector);
  } else {
    return el;
  }
}

// the text about me

const aboutLong =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const aboutShort = "";
