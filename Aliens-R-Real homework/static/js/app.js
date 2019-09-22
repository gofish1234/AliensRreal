
// from data.js
var tableData = data;

tableData.forEach(tableData) => {
  var row = tbody.append("tr");
 Object.entries(tableData).forEach(([key, value]) => {
  var cell = row.append("td");
   cell.text(value);    
   });
 });

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")

    
//function getdata (tableData) {    
// return data.datetime === inputValue)
//    };
//var filtereddata = tableData.filter(getdata);

function filter() {
  var inputDate = d3.select("#datetime");
  var inputValue = inputDate.property("value");
  console.log(inputDate);
  console.log(inputValue);
  var filteredData = tableData.filter(tableData => tableData.datetime ===inputValue);
});
  

//create function upon button click
button.on("click", filter)