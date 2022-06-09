const $form = document.getElementById("frmUsers");
const $divElements = document.getElementById("divElements");
const $btnAdd = document.getElementById("btnAdd");
const $btnsave = document.getElementById("btnSave");

const removeElement = (id) => {
  let element = document.getElementById(id.id);
  element.remove();
};
const templateElement = (data) => {
  let id = data.replace(/ /g, "");
  return `
        <button class="delete" onClick="removeElement(${id})"></button>
        <strong>User - </strong> ${data}
        `;
};
$btnAdd.addEventListener("click", (event) => {
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastName");
  let nombreco = name.value + lastName.value;
  let id = nombreco.replace(/ /g, "");
  if (name.value != "" && lastName.value != "") {
  } else {
    alert("complete los campos");
    return;
  }
  const $div = document.createElement("div");
  $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1");
  $div.id = `${id}`;
  $div.innerHTML = templateElement(`${name.value} ${lastName.value}`);
  $divElements.appendChild($div);
  $form.reset();
});
