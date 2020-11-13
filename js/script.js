/*
Name: Joshua Michaud
Email: Joshua_Michaud@student.uml.edu
Affiliation: Student at Umass Lowell Computer Science
Date: 11/12/2020
Description: This webpage is uses JavaScript to create a Multiplication Table and jQuery
validation Plugin is used for error handling
Location: github
91.461 Assignment: Assignment #6
Joshua Michaud, UMass Lowell Computer Science,
Copyright (c) 2020 by Joshua Michaud. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
*/


function InputValidation(){
    //sets variables to the values of input from the form
    let xStart = parseInt(document.getElementById("xMin").value);
    let xEnd = parseInt(document.getElementById("xMax").value);
    let yStart = parseInt(document.getElementById("yMin").value);
    let yEnd = parseInt(document.getElementById("yMax").value);

    //calls function to create table
    createTable(xStart, xEnd, yStart, yEnd);
}


//function to create the table
function createTable(xStart, xEnd, yStart, yEnd){

  //variables
  let i, j;
  let table = "";
  let setter;

  // Creates table
  for (j = yStart - 1; j <= yEnd; j++) {
      table += "<tr>";
    if (j == yStart - 1) {
        table += "<td></td>";
      for (i = xStart; i <= xEnd; i++) {
          table += "<td>" + i + "</td>";
      }
    }
    else {
        table += "<td>" + j + "</td>";
        for (i = xStart; i <= xEnd; i++) {
            table += "<td>" + i * j + "</td>";
        }
    }
    table += "</tr>";
  }
  // Insert table
  document.getElementById("multTable").innerHTML = table;
  //sets variable to the multTables first child
  setter = document.getElementById("multTable").firstChild;
  //https://www.w3schools.com/jsref/met_element_setattribute.asp used to see how to set setAttribute
  //sets first child with attribute
  setter.setAttribute("id", "tableClear");
}

//function to clear the table
function clearTable(){
  let table = document.getElementById("tableClear");

  if(table != null)
  {
      table.remove();
  }


}
