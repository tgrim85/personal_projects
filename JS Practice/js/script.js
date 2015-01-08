// Get number of rows and columns
var rs = document.getElementsByTagName("tr");
var clen = rs[0].cells.length;

//Make each row clickable, and call myFunction with the row data for the row clicked.
for(var i = 0; i < rs.length; i++) {
  rs[i].addEventListener("click", function () {
    myFunction(this);
  });
}

function myFunction(r) {

    // Create an overlay div that will sit behind the popup so that a user cannot click
    // anything until the popup is closed
    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'overlay';
    document.body.appendChild(overlayDiv);

    var newDiv = document.createElement('div');
    newDiv.id = 'popup';
    document.body.appendChild(newDiv);

    document.getElementById('popup').style.display = 'block';

    //Get the cell information from each cell of the table and add it to the popup div

    var result = "";

    for(var z = 0; z < clen; z++){
         var cellInfo = r.cells[z].innerHTML;
         result += "Row: " + r.rowIndex + "  Column: " + z + ":  " + cellInfo + "<br><br>";
    }

    document.getElementById("popup").innerHTML = result;

    //Append a button element to the popup div so that the user can close the div
    var btn = document.createElement("BUTTON");
    btn.id = 'button';
    var t = document.createTextNode("Close");
    btn.appendChild(t);
    newDiv.appendChild(btn);

    //Remove the overlaydiv and the popupdiv after the close button has been clicked
    btn.addEventListener("click", function() {
      document.body.removeChild(overlayDiv);
      document.body.removeChild(newDiv);
    });

}
