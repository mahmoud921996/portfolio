// SHOW LINKS
const showLinks = (icon, listLinks) => {
  const toggle = document.querySelector(icon);
  const nav = document.querySelector(listLinks);

  toggle.addEventListener("click", () => nav.classList.toggle("show"));

  document.addEventListener("click", e => {
    e.target.className !== "icon" && e.target.className !== "icon-shape"
      ? nav.classList.remove("show")
      : false;
  });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
  const links = document.querySelectorAll(".list-links a");
  links.forEach(link => link.classList.remove("active"));
  this.classList.add("active");

  const nav = document.querySelector(".list-links");
  nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach(link => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", e => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-sun");
}

// DISPLAY SKILLS
let skills = [
  { name: "HTML", icon: "bx bxl-html5" },
  { name: "CSS", icon: "bx bxl-css3" },
  { name: "JAVASCRIPT", icon: "bx bxl-javascript" },
  { name: "REACT JS", icon: "bx bxl-react" },
  { name: "REDUX", icon: "bx bxl-redux" },
  { name: "SASS", icon: "bx bxl-sass" },
  { name: "BOOTSTRAP", icon: "bx bxl-bootstrap" },
  { name: "JSON & AJAX & AXIOS", icon: "bx bxs-file-json" },
  { name: "GIT & GITHUB", icon: "bx bxl-github" },
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map(skill => {
    return `
      <div class="skills-box line-swaping">
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      </div>
      `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "Crwn clothes Store",
    img: "../img/crwn-store.png",
    link: "https://crwn-store-clothes.netlify.app/",
    tech: "React-Redux",
  },
  {
    name: "Alexa Portfolio",
    img: "../img/alexa.png",
    link: "https://mahmoud921996.github.io/Alexa-portfolio/",
    tech: "Javascript",
  },
  {
    name: "E-commerce App",
    img: "../img/comfy-sloth.png",
    link: "https://comfy-sloths-zone.netlify.app/",
    tech: "React Js",
  },
  {
    name: "Mobile shop App",
    img: "../img/mobile-shop.png",
    link: "https://mahmoud921996.github.io/mobile-shop/",
    tech: "Javascript",
  },
  {
    name: "Psd to Html&Css",
    img: "../img/elzero-temp.png",
    link: "https://mahmoud921996.github.io/HTML_AND_CSS_TEMP_3/",
    tech: "HTML-CSS",
  },
  {
    name: "Food Api Recipe",
    img: "../img/foor-reccipe.png",
    link: "https://mahmoud921996.github.io/Food_Recipe_App_Using_API/",
    tech: "Javascript",
  },
];

let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
  const display = projects.map(project => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> Details </a>
                    <p>${project.name}</p>
                    <span class='tech-span'>${project.tech}<span/>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  projectsContentDOM.innerHTML = display.join("");
};

displayProjects();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", {});

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});
