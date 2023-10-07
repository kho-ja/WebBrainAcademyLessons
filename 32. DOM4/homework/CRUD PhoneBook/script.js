let phonebook = [
  {
    id: 0,
    name: "Abdulaziz",
    number: "93-5108199",
  },
  {
    id: 1,
    name: "Bobomurod",
    number: "93-547-21-63",
  },
  {
    id: 2,
    name: "Baxtishod",
    number: "564654654",
  },
  {
    id: 3,
    name: "Najimiddin",
    number: "+998905478912",
  },
];

let phonebookTable = document.querySelector("#phonebookTable");

let personForm = document.querySelector("#PersonForm");
let nameInput = document.querySelector("#nameInput");
let numberInput = document.querySelector("#numberInput");
personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (numberInput.value && nameInput.value) {
    addPerson(nameInput.value, numberInput.value);
    nameInput.value = "";
    numberInput.value = "";
  } else {
    alert("Fill the all of the fields");
  }
});

let searchInput = document.querySelector("#searchInput");
searchInput.oninput = () => {
  let searchText = searchInput.value;
  if (searchText) {
    displayPeople(searchPerson(searchText));
  } else {
    displayPeople();
  }
};

let filterSelect = document.querySelector("#filterSelect");
filterSelect.onchange = () => {
  sortPeople(filterSelect.value);
};

displayPeople();

function displayPeople(arr = phonebook, edit = -1) {
  phonebookTable.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    for (let value of Object.entries(arr[i])) {
      let td = document.createElement("td");
      if (edit === arr[i].id && value[0] !== "id") {
        let input = document.createElement("input");
        input.id = `edited${value[0]}`;
        input.value = value[1];
        td.append(input);
      } else {
        td.innerText = value[1];
      }
      tr.append(td);
    }
    let td = document.createElement("td");
    let editBtn = document.createElement("button");
    if (edit === arr[i].id) {
      editBtn.innerText = "Save";
      editBtn.onclick = (e) => {
        let editedname = document.querySelector("#editedname").value;
        let editednumber = document.querySelector("#editednumber").value;
        updatePerson(arr[i].id, editedname, editednumber);
      };
    } else {
      editBtn.innerText = "Edit";
      editBtn.onclick = (e) => {
        displayPeople(phonebook, arr[i].id);
      };
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
      deletePerson(arr[i].id);
    };
    td.append(editBtn);
    td.append(deleteBtn);
    tr.append(td);
    phonebookTable.append(tr);
  }
}

function* generateId() {
  let i = phonebook.at(-1).id;
  while (true) {
    i++;
    yield i;
  }
}

const id = generateId();

function addPerson(name, number) {
  phonebook = [
    ...phonebook,
    {
      id: id.next().value,
      name,
      number,
    },
  ];
  displayPeople();
}

function searchPerson(searchText) {
  return phonebook.filter(
    (v) =>
      v.name.toLowerCase().includes(searchText.toLowerCase()) ||
      v.number.toLowerCase().includes(searchText.toLowerCase())
  );
}

function sortPeople(key) {
  if (key === "id") {
    phonebook.sort((a, b) => a.id - b.id);
  } else {
    phonebook.sort((a, b) => a[key].localeCompare(b[key]));
  }
  displayPeople();
}

function updatePerson(id, name, number) {
  let person = phonebook.find((v) => v.id === id);
  person.name = name;
  person.number = number;
  displayPeople();
}

function deletePerson(id) {
  phonebook = phonebook.filter((v) => v.id !== id);
  displayPeople();
}
