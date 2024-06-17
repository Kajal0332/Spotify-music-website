const body = document.querySelector("body");
const leftSideBar = body.querySelector("leftSideBar");
const SecondSec = body.querySelector("Second-sec");
const libraryIcon = document.querySelector("library-icon");
// const SearchBox = document.querySelector("Second-sec");

libraryIcon.addEventListener("click", () => {
    leftSideBar.css("background:green");
})