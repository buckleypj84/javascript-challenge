//==============================================================
// Input field and button: 
//   -- datetime
//   -- search button
//   -- tbody element
// Data File:
//   -- addressData.js
//==============================================================
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

//============================================================== 
//Event listener and searchButton 
//==============================================================
$searchBtn.addEventListener('click', handleSearchButtonClick);
var filteredAddresses = addressData;

//==============================================================
// Load addressData
//==============================================================
function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < filteredAddresses.length; i++) {
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }

//==============================================================
// Search Function
//==============================================================
  function handleSearchButtonClick() {
    var filterDate=d3.select("#datetime").property('value');
    filteredAddresses = addressData.filter(function(address) {
      var addressDate = address.datetime;      
      return addressDate == filterDate;
      
    })

    renderTable();
    }
  
  // Load initial table
  renderTable();