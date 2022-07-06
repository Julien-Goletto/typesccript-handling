"use strict";
const itemsContainers = document.querySelectorAll(".items-container");
// Pointers in global scope
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidation;
const addContainerListeners = (currentContainer) => {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentForm = currentContainer.querySelector("form");
    deleteBtnListener(currentContainerDeletionBtn);
    addItemBtnListener(currentAddItemBtn);
    addCloseFormBtnListener(currentCloseFormBtn);
    addFormSubmitListener(currentForm);
    addDDListener(currentContainer);
};
const deleteBtnListener = (btn) => {
    btn.addEventListener("click", handleContainerDeletion);
};
const addItemBtnListener = (btn) => {
    btn.addEventListener("click", handleAddItem);
};
const addCloseFormBtnListener = (btn) => {
    // accessing the button implies that the form is already openned
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
};
const addFormSubmitListener = (form) => {
    form.addEventListener("submit", createNewItem);
};
const addDDListener = (element) => {
    element.addEventListener('dragstart', handleDragStart);
    element.addEventListener('dragover', handleDragOver);
    element.addEventListener('drop', handleDrop);
    element.addEventListener('dragend', handleDragEnd);
};
// Event handlers
const handleContainerDeletion = (e) => {
    const btn = e.target;
    const btnsArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    containers[btnsArray.indexOf(btn)].remove();
};
const handleAddItem = (e) => {
    const btn = e.target;
    // Close an already openned form before oppenning another one
    if (actualBtn)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
};
const handleCloseForm = (e) => {
    const btn = e.target;
    setContainerItems(btn);
};
const createNewItem = (e) => {
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "At least one character required.";
        return;
    }
    actualValidation.textContent = "";
    // Creation
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true"><p>${itemContent}</p><button>X</button></li>`;
    actualUl.insertAdjacentHTML("beforeend", li);
    const item = actualUl.lastElementChild;
    const liBtn = item.querySelector("button");
    handleItemDeletion(liBtn);
    // Adding D&D
    addDDListener(item);
    actualTextInput.value = "";
};
const handleItemDeletion = (btn) => {
    btn.addEventListener("click", () => {
        const liToRemove = btn.parentElement;
        liToRemove.remove();
    });
};
// Drag and drop
let dragSrcEl;
function handleDragStart(e) {
    var _a;
    e.stopPropagation();
    // Closing openned forms
    if (actualBtn)
        toggleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/html", this.innerHTML); //TS needs a ? in case the item should be null
}
function handleDragOver(e) {
    e.preventDefault();
}
function handleDrop(e) {
    var _a;
    e.stopPropagation();
    const receptionEl = this;
    if (dragSrcEl.nodeName === "LI" &&
        receptionEl.classList.contains("items-container")) {
        receptionEl.querySelector("ul").appendChild(dragSrcEl);
        addDDListener(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector("button"));
        return;
    }
    // Case where the item has the same class and trigger a position swap
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        //Content swap between 2 items of same type
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/html");
        if (this.classList.contains("items-container")) {
            addContainerListeners(this);
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDListener(li);
                return;
            });
        }
        addDDListener(this);
        handleItemDeletion(this.querySelector("button"));
    }
}
// To handle event listeners on targetted element
function handleDragEnd(e) {
    e.stopPropagation();
    if (this.classList.contains("items-container")) {
        this.querySelectorAll("li").forEach((li) => {
            handleItemDeletion(li.querySelector("button"));
            addDDListener(li);
        });
        addContainerListeners(this);
        return;
    }
    addDDListener(this);
}
// Helping functions
const setContainerItems = (btn) => {
    (actualBtn = btn),
        (actualContainer = btn.parentElement),
        (actualUl = actualContainer.querySelector("ul")),
        (actualForm = actualContainer.querySelector("form")),
        (actualTextInput = actualContainer.querySelector("input")),
        (actualValidation = actualContainer.querySelector(".validation-msg"));
};
const toggleForm = (btn, form, action) => {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
        return;
    }
    form.style.display = "block";
    btn.style.display = "none";
};
// Aply all event listeners on main content
itemsContainers.forEach((container) => addContainerListeners(container));
// Add new container
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainer = document.querySelector(".add-new-container");
const containerList = document.querySelector(".main-content");
const createNewContainer = (e) => {
    e.preventDefault();
    // Validation
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "At least one character required.";
        return;
    }
    validationNewContainer.textContent = "";
    // Container creation
    const itemsContainer = document.querySelector(".items-container");
    // Shallow cloning a container for the new element
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
    <div class="top-container">
      <h2>${addContainerFormInput.value}</h2>
      <button class="delete-container-btn">X</button>
    </div>
    <ul></ul>
    <button type="button" class="add-item-btn">Add an item</button>
    <form action="submit" autocomplete="off">
      <div class="top-form-container">
        <label for="item">Add a new item</label>
        <button type="button" class="close-form-btn">X</button>
      </div>
      <input type="text" id="item" />
      <span class="validation-msg"></span>
      <button type="submit">Submit</button>
    </form>
  `;
    newContainer.innerHTML = newContainerContent;
    containerList.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = "";
    // Don't forget to add all eventListeners on this new container
    addContainerListeners(newContainer);
    toggleForm(addContainerBtn, addContainerForm, false);
};
// Adding listeners
addContainerBtn.addEventListener("click", () => toggleForm(addContainerBtn, addContainerForm, true));
addContainerCloseBtn.addEventListener("click", () => toggleForm(addContainerBtn, addContainerForm, false));
addContainerForm.addEventListener("submit", createNewContainer);
