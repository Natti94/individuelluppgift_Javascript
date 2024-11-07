function registerUser() {
  let nameFieldType = document.getElementById("nameFieldType");
  let phoneFieldType = document.getElementById("phoneFieldType");
  let errorMessage = document.getElementById("errorMessage");
  let userList = document.getElementById("userList");
  errorMessage.style.display = "none";
  
  if (nameFieldType.value !== "" && phoneFieldType.value !== "") {
    let userContainer = document.createElement("div");
    userContainer.style.marginBottom = "10px";
    let displayName = document.createElement("input");
    displayName.value = nameFieldType.value;
    displayName.readOnly = true;
    displayName.style.background = "lightgray";
    displayName.style.marginRight = "10px";
    let displayPhone = document.createElement("input");
    displayPhone.value = phoneFieldType.value;
    displayPhone.readOnly = true;
    displayPhone.style.background = "lightgray";
    displayPhone.style.marginRight = "10px";
    let editButton = document.createElement("button");
    editButton.innerText = "Ändra";
    editButton.onclick = function () {
      editUser(displayName, displayPhone, editButton);
    };
    let removeButton = document.createElement("button");
    removeButton.innerText = "Radera";
    removeButton.onclick = function () {
      removeUser(userContainer);
    };
    userContainer.appendChild(displayName);
    userContainer.appendChild(displayPhone);
    userContainer.appendChild(editButton);
    userContainer.appendChild(removeButton);
    userList.appendChild(userContainer);
    nameFieldType.value = "";
    phoneFieldType.value = "";
  } else {
    errorMessage.style.display = "block";
  }
}

function editUser(nameField, phoneField, editButton) {
  if (editButton.innerText === "Ändra") {
    nameField.readOnly = false;
    phoneField.readOnly = false;
    nameField.style.background = "inherit";
    phoneField.style.background = "inherit";
    editButton.innerText = "Spara";
  } else {
    nameField.readOnly = true;
    phoneField.readOnly = true;
    nameField.style.background = "lightgray";
    phoneField.style.background = "lightgray";
    editButton.innerText = "Ändra";
  }
}
function removeUser(userContainer) {
  userContainer.remove();
}
