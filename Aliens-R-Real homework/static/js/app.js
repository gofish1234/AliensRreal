// from data.js
var myData = data;
//console.log(tableData);
var tbody = d3.select("tbody");

function buildtable(myData) {
 // var tbody = d3.select("tbody");
  myData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("")
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = myData.filter(myData => myData.datetime === inputValue);
  filteredData.forEach((ufodata) => {
//  var tbody = d3.select("tbody");
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    console.log(inputValue);
  });
});
});
buildtable(myData);