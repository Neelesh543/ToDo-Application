let to_do_elem = document.querySelector(".to-do_list_element");
let input = document.getElementById("inputValue");
let addItem = document.getElementById("add");
let delItem = document.getElementsByClassName("delItem");
let error = document.getElementById("error");

let localTodoList = [];

let addToDoList = (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue != "") {
    const existingItems = Array.from(to_do_elem.children);
    const isDuplicate = existingItems.some((item) =>
      item.textContent.includes(inputValue)
    );

    if (!isDuplicate) {
      localTodoList.push(inputValue);
      localTodoList = [...new Set(localTodoList)];

      const todoItem = document.createElement("div");
      todoItem.classList.add("store_value");
      todoItem.innerHTML = `<li> ${inputValue}</li>  <button class="delItem">Delete</button> `;

      to_do_elem.append(todoItem);
      error.style.display = "none";
    } else {
      error.innerText = "Item already exists in the list";
      error.style.display = "block";
    }

    input.value = "";
  } else {
    error.innerText = "Please enter data";
    error.style.display = "block";
  }
};

addItem.addEventListener("click", (e) => {
  addToDoList(e);
});

const removeTodoElem = (e) => {
  e.target.parentNode.remove();
  localTodoList = localTodoList.filter((currTodo) => {
    currTodo !== e.target.parentNode.children[0].textContent.trim();
  });
};

to_do_elem.addEventListener("click", (e) => {
  e.preventDefault();
  removeTodoElem(e);
});
