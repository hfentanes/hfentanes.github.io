//función que devuelve todos los to-dos que sean "false"
function uncompletedNotes(notes) {
  const uncompletedTodos = [];

  notes.forEach((note) => {
    note.todos.forEach((todo) => {
      if (!todo.done) {
        uncompletedTodos.push(todo);
      }
    });
  });

  return uncompletedTodos;
}

//info del enunciado
const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

//sale en pantalla
const uncompleted = uncompletedNotes(notes);
console.log(uncompleted);
