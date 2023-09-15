// CRUD => Create Read Update Delete
let students = [
  { id: 1, name: "Palonchi", age: 20 },
  { id: 2, name: "Pistonchi", age: 32 },
  { id: 3, name: "Pismadonchi", age: 12 },
  { id: 4, name: "Kimdir", age: 40 },
];

// Create
let createStudent = (name, age) => {
  students = [...students, { id: students.at(-1).id + 1, name, age }];
};

// Read
//* Sort
let sortStudents = (key) => {
  students.sort((a, b) =>
    typeof a[key] === "string" ? a[key].localeCompare(b[key]) : a[key] - b[key]
  );
};

//* Search
let searchStudentsByName = (text) => {
  return students.filter((v) =>
    v.name.toLowerCase().includes(text.toLowerCase())
  );
};

// Update
let updateStudent = (id, key, value) => {
  let index = students.findIndex((v) => v.id === id);
  students[index][key] = value;
};

// Delete
let deleteStudent = (id) => {
  students = students.filter((v) => v.id !== id);
};

createStudent("Tolib", 25);

sortStudents("id");

console.log(searchStudentsByName("a"));

updateStudent(5, "name", "Olim");

sortStudents("Name");

deleteStudent(5);

deleteStudent(searchStudentsByName("Palonchi")[0].id);

console.log(students);
