const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

//add, remove, read, list

//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: `Please don't foget to add a body!`,
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//list command
yargs.command({
  command: "list",
  describe: "listng a note",
  handler(argv) {
    notes.listNotes(argv.title);
    console.log("Listing a note");
  },
});

//read command
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "read a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);
