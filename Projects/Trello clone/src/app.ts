const itemsContainers = document.querySelectorAll(
  ".items-container"
) as NodeListOf<HTMLDivElement>;

// Pointers in global scope
let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUl: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidation: HTMLSpanElement;

const addContainerListeners = (currentContainer: HTMLDivElement) => {
  const currentContainerDeletionBtn = currentContainer.querySelector(
    ".delete-container-btn"
  ) as HTMLButtonElement;
  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn"
  ) as HTMLButtonElement;
  const currentCloseFormBtn = currentContainer.querySelector(
    ".close-form-btn"
  ) as HTMLButtonElement;
  const currentForm = currentContainer.querySelector("form") as HTMLFormElement;
  deleteBtnListener(currentContainerDeletionBtn);
  addItemBtnListener(currentAddItemBtn);
  addCloseFormBtnListener(currentCloseFormBtn);
  addFormSubmitListener(currentForm);
  addDDListener(currentContainer);
};

const deleteBtnListener = (btn: HTMLButtonElement) => {
  btn.addEventListener("click", handleContainerDeletion);
};
const addItemBtnListener = (btn: HTMLButtonElement) => {
  btn.addEventListener("click", handleAddItem);
};
const addCloseFormBtnListener = (btn: HTMLButtonElement) => {
  // accessing the button implies that the form is already openned
  btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
};
const addFormSubmitListener = (form: HTMLFormElement) => {
  form.addEventListener("submit", createNewItem);
};
const addDDListener = (element: HTMLElement) => {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragover', handleDragOver);
  element.addEventListener('drop', handleDrop);
  element.addEventListener('dragend', handleDragEnd);
};

// Event handlers
const handleContainerDeletion = (e: MouseEvent) => {
  const btn = e.target as HTMLButtonElement;
  const btnsArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnsArray.indexOf(btn)].remove();
};
const handleAddItem = (e: MouseEvent) => {
  const btn = e.target as HTMLButtonElement;
  // Close an already openned form before oppenning another one
  if (actualBtn) toggleForm(actualBtn, actualForm, false);
  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true);
};
const handleCloseForm = (e: MouseEvent) => {
  const btn = e.target as HTMLButtonElement;
  setContainerItems(btn);
};
const createNewItem = (e: Event) => {
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
  const item = actualUl.lastElementChild as HTMLLIElement;
  const liBtn = item.querySelector("button") as HTMLButtonElement;
  handleItemDeletion(liBtn);
  // Adding D&D
  addDDListener(item);
  actualTextInput.value = "";
};
const handleItemDeletion = (btn: HTMLButtonElement) => {
  btn.addEventListener("click", () => {
    const liToRemove = btn.parentElement as HTMLLIElement;
    liToRemove.remove();
  });
};
// Drag and drop
let dragSrcEl: HTMLElement;
function handleDragStart(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  // Closing openned forms
  if (actualBtn) toggleForm(actualBtn, actualForm, false);
  dragSrcEl = this;
  e.dataTransfer?.setData("text/html", this.innerHTML); //TS needs a ? in case the item should be null
}
function handleDragOver(e: DragEvent) {
  e.preventDefault();
}
function handleDrop(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  const receptionEl = this;
  if (
    dragSrcEl.nodeName === "LI" &&
    receptionEl.classList.contains("items-container")
  ) {
    (receptionEl.querySelector("ul") as HTMLUListElement).appendChild(
      dragSrcEl
    );
    addDDListener(dragSrcEl);
    handleItemDeletion(dragSrcEl.querySelector("button") as HTMLButtonElement);
    return;
  }
  // Case where the item has the same class and trigger a position swap
  if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
    //Content swap between 2 items of same type
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer?.getData("text/html") as string;
    if (this.classList.contains("items-container")) {
      addContainerListeners(this as HTMLDivElement);
      this.querySelectorAll("li").forEach((li: HTMLLIElement) => {
        handleItemDeletion(li.querySelector("button") as HTMLButtonElement);
        addDDListener(li);
        return;
      });
    }
    addDDListener(this);
    handleItemDeletion(this.querySelector("button") as HTMLButtonElement);
  }
}
// To handle event listeners on targetted element
function handleDragEnd(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  if (this.classList.contains("items-container")) {
    this.querySelectorAll("li").forEach((li: HTMLLIElement) => {
      handleItemDeletion(li.querySelector("button") as HTMLButtonElement);
      addDDListener(li);
    });
    addContainerListeners(this as HTMLDivElement);
    return;
  }
  addDDListener(this);
}

// Helping functions
const setContainerItems = (btn: HTMLButtonElement) => {
  (actualBtn = btn),
    (actualContainer = btn.parentElement as HTMLDivElement),
    (actualUl = actualContainer.querySelector("ul") as HTMLUListElement),
    (actualForm = actualContainer.querySelector("form") as HTMLFormElement),
    (actualTextInput = actualContainer.querySelector(
      "input"
    ) as HTMLInputElement),
    (actualValidation = actualContainer.querySelector(
      ".validation-msg"
    ) as HTMLSpanElement);
};
const toggleForm = (
  btn: HTMLButtonElement,
  form: HTMLFormElement,
  action: boolean
) => {
  if (!action) {
    form.style.display = "none";
    btn.style.display = "block";
    return;
  }
  form.style.display = "block";
  btn.style.display = "none";
};

// Aply all event listeners on main content
itemsContainers.forEach((container: HTMLDivElement) =>
  addContainerListeners(container)
);

// Add new container
const addContainerBtn = document.querySelector(
  ".add-container-btn"
) as HTMLButtonElement;
const addContainerForm = document.querySelector(
  ".add-new-container form"
) as HTMLFormElement;
const addContainerFormInput = document.querySelector(
  ".add-new-container input"
) as HTMLInputElement;
const validationNewContainer = document.querySelector(
  ".add-new-container .validation-msg"
) as HTMLSpanElement;
const addContainerCloseBtn = document.querySelector(
  ".close-add-list"
) as HTMLSpanElement;
const addNewContainer = document.querySelector(
  ".add-new-container"
) as HTMLDivElement;
const containerList = document.querySelector(".main-content") as HTMLDivElement;

const createNewContainer = (e: Event) => {
  e.preventDefault();
  // Validation
  if (addContainerFormInput.value.length === 0) {
    validationNewContainer.textContent = "At least one character required.";
    return;
  }
  validationNewContainer.textContent = "";
  // Container creation
  const itemsContainer = document.querySelector(
    ".items-container"
  ) as HTMLDivElement;
  // Shallow cloning a container for the new element
  const newContainer = itemsContainer.cloneNode() as HTMLDivElement;
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
addContainerBtn.addEventListener("click", () =>
  toggleForm(addContainerBtn, addContainerForm, true)
);
addContainerCloseBtn.addEventListener("click", () =>
  toggleForm(addContainerBtn, addContainerForm, false)
);
addContainerForm.addEventListener("submit", createNewContainer);
