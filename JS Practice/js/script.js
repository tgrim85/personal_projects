// Get number of rows and columns
var rows = document.getElementsByTagName("tr");
var columns = rows[0].cells.length;

//Make each row clickable, and call popupFunction with the row data for the row clicked.
for(var i = 0; i < rows.length; i++) {
  rows[i].addEventListener("click", function () {
    popupFunction(this);
  });
}

function popupFunction(r) {

    // Create an overlay div that will sit behind the popup so that a user cannot click
    // anything until the popup is closed
    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'overlay';
    document.body.appendChild(overlayDiv);

    //Create a popupDiv that will display a button to close itself and the results of the row
    var popupDiv = document.createElement('div');
    popupDiv.id = 'popup';
    document.body.appendChild(popupDiv);

    document.getElementById('popup').style.display = 'block';

    //Get the cell information from each cell of the table and add it to the popup div
    var result = "";

    for(var i = 0; i < columns; i++){
         var cellInfo = r.cells[i].innerHTML;
         result += "Row: " + r.rowIndex + "  Column: " + i + ":  " + cellInfo + "<br><br>";
    }

    popupDiv.innerHTML = result;

    //Append a button element to the popup div so that the user can close the div
    var btn = document.createElement("BUTTON");
    btn.id = 'button';
    var t = document.createTextNode("Close");
    btn.appendChild(t);
    popupDiv.appendChild(btn);

    //Remove the overlaydiv and the popupdiv after the close button has been clicked
    btn.addEventListener("click", function() {
      document.body.removeChild(overlayDiv);
      document.body.removeChild(popupDiv);
    });

}
