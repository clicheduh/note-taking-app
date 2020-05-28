/* MAKE NEW NOTE FUNCTION */
var makeNewNote = function () {
  var cellContainer = document.getElementById("note_row");

  // Bootstrap one cell added
  var divCell = document.createElement("div");
  divCell.setAttribute(
    "class",
    "note_cell col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
  );
  cellContainer.appendChild(divCell);

  // Note made (layout)
  var divNote = document.createElement("div");
  divNote.setAttribute("class", "note_layout");
  divCell.appendChild(divNote);

  // Note text
  var divNoteText = document.createElement("div"); // Note text div
  divNoteText.setAttribute("class", "note_text");
  divNote.appendChild(divNoteText);

  var newParaTitle = document.createElement("p"); // Para for note title
  divNoteText.appendChild(newParaTitle);

  var enterTitle = document.getElementById("text_title"); // Text taken from input (title) to new note
  var newTitle = document.createTextNode(enterTitle.innerHTML);
  newParaTitle.appendChild(newTitle);

  var newParaBody = document.createElement("p"); // Para for note body
  divNoteText.appendChild(newParaBody);

  var enterBody = document.getElementById("text_body"); // Text taken from input (body) to new note
  var newBody = document.createTextNode(enterBody.innerHTML);
  newParaBody.appendChild(newBody);

  // Note options
  var divNoteOptions = document.createElement("div"); // Note options div
  divNoteOptions.setAttribute("class", "note_options");
  divNote.appendChild(divNoteOptions);

  var spanNoteOptions = document.createElement("span"); // Delete note option
  divNoteOptions.appendChild(spanNoteOptions);
  var deleteNote = document.createElement("i");
  deleteNote.setAttribute("class", "fas fa-times");
  spanNoteOptions.appendChild(deleteNote);

  var removeNote = function () {
    divNote.remove();
  };
  deleteNote.addEventListener("click", removeNote);
};
