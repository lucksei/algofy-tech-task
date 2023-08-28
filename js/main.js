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
  node.scrollIntoView({ behavior: "smooth" }, true);

  //   window.scrollTo({
  //     top: node.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   window.location.href = anchor;
}

function toggleExpand(expanded) {
  const span = expandBtn.querySelector("span");
  const icon = expandBtn.querySelector("i");

  span.innerText = expanded ? "More" : "Less";
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");

  if (expanded) {
    aboutText.innerText = aboutShort;
  } else {
    aboutText.innerText = aboutLong;
  }
}

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
  "Hello, my name is Luca Seimandi, im a 26 years old Telecomunication Engineer, and lately i've been looking to get into the field of Software Development and DevOps. I have very diverse passions and hobbies, i enjoy keeping up with new tecnologies and learning new skills every day, both in the professional field, and also in my personal life. I enjoy challenges and solving problems, I like to think that being able to divide a difficult task into pieces and tackling each one is a pretty rewarding experience, and so was this challenge.";

const aboutShort =
  "Hello, my name is Luca Seimandi, im a 26 years old Telecomunication Engineer, and lately i've been looking to get into the field of Software Development and DevOps. I have …";
