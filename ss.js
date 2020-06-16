// Defines variables table, size, submit
var table = document.getElementById("pixelCanvas").value
var size = document.getElementById("sizePicker").value
var submit = document.getElementById("submitButton").value

// Checks if sumbit button is working
submitButton.addEventListener("click", function(submit) {
    submit.preventDefault()

    // "Sumbit button was clicked!" will be displayed in the console
    // after the click to know it is working
    console.log("Sumbit button was clicked!");
    // Defines variables hight, width, color
    var height=document.getElementById("inputHeight").value;
    var width=document.getElementById("inputWidth").value;
    var color=document.getElementById("colorPicker").value;
    // Height, width, color will be displayed in the console
    // after the click to know it is working
    console.log(height, width, color);
    //Making a grid
    makeGrid(height, width, color); 
})

function makeGrid(height, width, color) {
    // Defines variable table
    var table = document.getElementById("pixelCanvas");
    // Clears the grid when the user updates
    table.innerHTML = "";
    // Creates rows
    for(i=0; i < height; i++) {
        var newRow = table.insertRow(i);
            // Creates cells
        for(j=0; j < width; j++) {
            var newCell = newRow.insertCell(j);
            //Event Listener that recognises the place user clicks on
            newCell.addEventListener("click", function(clicking) {
                // Shows in the console the result of the place
                console.log(clicking);
                // value color
                var color=document.getElementById("colorPicker").value;
                //Recognises if the grid is colored
                if(this.getAttribute('colored')){
                    //Colors the cell white if is colored
                    this.style.backgroundColor = "#ffffff";
                    this.setAttribute('colored', '');
                }else{
                    // Changes the color that user choses
                    this.style.backgroundColor = color;
                    this.setAttribute('colored', 'active');
                }
        });
    }
}
}
