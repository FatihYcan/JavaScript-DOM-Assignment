const header = document.querySelector("header");

header.style.backgroundColor = "#FF4500";
header.style.color = "white";
header.style.textAlign = "center";
header.style.padding = "10px";

const title = document.getElementById("title");
title.textContent = "Javascript Dom Assignment 1";

const navItem = document.querySelector(".nav-item");
navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.alignItems = "center";
navItem.style.gap = "10px";
navItem.style.listStyle = "none";

const usernameInput = document.querySelector("#username");
usernameInput.value = "FatihYcan";
usernameInput.disabled = true;

const passwordInput = document.querySelector("#password");
console.log(passwordInput.value);
passwordInput.value = "123456";
passwordInput.type = "text";
passwordInput.disabled = true;

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "#C0EFC0";
btn.style.padding = "10px";
btn.style.borderRadius = "10px";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.textContent = "Giriş Yap";

const projects = document.getElementById("projects");
projects.firstElementChild.innerText = "Js Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

const ul = document.querySelector("section#projects ul");
console.log(ul);

myProjects.forEach((project) => {
  const li = document.createElement("li");
  li.textContent = project;
  ul.appendChild(li);
});
