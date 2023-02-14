//JS for WebBroser
const button = document.querySelector("button");

//1

//2

//## option2
// button.onclick = function () {
//   alert("form is already submited #2");
// };

//## option3

// button.addEventListener("click", function () {
//   alert("form is already submited #3");
// });

//3
// button.addEventListener("click", (event) => {
//   event.preventDefault();
// });

//6

// button.addEventListener("click", () => {
//   button.style.display = "none";
// });

//7
// const text = document.querySelector("p");
// button.addEventListener("click", () => {
//   text.classList.toggle("hide");
//   button.innerHTML = text.classList.contains("hide") ? "Show" : "Hide";
// });

//12

const btnAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const btnDel = document.querySelector(".btn-delete");
const btnEdit = document.querySelector(".btn-edit");

//Add task
btnAdd.addEventListener("click", () => {
  const input = document.querySelector("input");
  let newTask = input.value;
  let html = `<li>
    <span>${newTask}</span>
    <button class="btn-edit">Edit</button>
    <button class="btn-delete">Delete</button>
  </li>`;
  ul.insertAdjacentHTML("beforeend", html);
});

//delete task
btnDel.addEventListener("click", () => {
  alert("this is in delete button");
});

btnEdit.addEventListener("click", () => {
  alert("this is in edit button");
});
