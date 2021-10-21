const chalk = require("chalk");
const fs = require("fs");
const { title } = require("process");

//ADD NOTE!

const addNote = (title, body) => {
  const notes = loadNotes();
  /* const duplicateNotes = notes.filter((note) => note.title === title); */
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("new note added!"));
  } else {
    console.log(chalk.red.inverse("note title taken!"));
  }
};

// REMOVE NOTE!

const removeNote = function (title) {
  const notes = loadNotes();
  const keepingNotes = notes.filter((note) => note.title !== title);
  if (notes.length > keepingNotes.length) {
    console.log(chalk.green.inverse("note remove!"));
  } else {
    console.log(chalk.red.inverse("NO note found!"));
  }
  saveNotes(keepingNotes);
  console.log(`you have removed the ${title}`);
};

const listNotes = (title) => {
  const notes = loadNotes();
  notes.forEach((title) => {
    console.log(chalk.yellow.inverse(`${title.title}`));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("No such title found!");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJOSN = dataBuffer.toString();
    return JSON.parse(dataJOSN);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
