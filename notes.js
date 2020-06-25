//const chalk = require("require")
const fs = require("fs");

const getNotes = function () {};
//Remove Notes
const removeNotes = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);
  console.log("Removing....", remove);
};
const listNotes = () => {
  const notes = getNotes();
  notes.forEach((note) => console.log("Title :: ", note.title));
};
const addNote = (title, body) => {
  console.log("Into AddNote Method of notes.js file");

  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("New Note Added!");
  } else {
    console.log("Note Title Already Exists");
  }
};
// // Save Notes
const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};
// Save Load Notes
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.stringify(dataJson);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
};
