// var newNote = document.createElement("p");
// var noteText = document.getElementById("enter_text").innerHTML;

// var newTextNode = document.createTextNode(noteText);
// newNote.appendChild(newTextNode);

// var newDiv = document.getElementById("note_div");

// newDiv.appendChild(newNote);

var makeNewNote = function () {
  var newPara = document.createElement("p");
  newPara.setAttribute("class", "newParaClass");
  var enterText = document.getElementById("enter_text");

  var newText = document.createTextNode(enterText.innerHTML);

  newPara.appendChild(newText);

  var divOne = document.createElement("div");
  divOne.setAttribute(
    "class",
    "note_layout col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
  );
  var divTwo = document.createElement("div");
  divTwo.setAttribute("class", "newDivClass");

  var divContainer = document.getElementById("note_row");

  divContainer.appendChild(divOne);
  divOne.appendChild(divTwo);
  divTwo.appendChild(newPara);
};
