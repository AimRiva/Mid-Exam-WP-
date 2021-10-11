let form = document.querySelector ('form');
form.addEventListener('submit', insertStudent);


function insertStudent(e) {
    e.preventDefault();
  
  // get user input
    let studentNIM = document.querySelector('#inputNIM');
    let studentName = document.querySelector('#inputName');

    const rbs = document.querySelectorAll('input[name="flexRadioDefault"]');
        let selectedValue;
        let genderI; //Final Gender
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
      genderI = selectedValue;
      console.log(genderI);

    let select = document.getElementById('facultySelect');
    let value = select.options[select.selectedIndex].value;
    console.log(value);

    let select2 = document.getElementById('programStudy');
    let value2 = select2.options[select2.selectedIndex].value;
    console.log(value); // en


    console.log(`${studentNIM.value} / ${studentName.value} / ${genderI} / ${value} / ${value2}`);


    let tbodyRef = document.getElementById('tableStu').getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();
    
    // Insert a cell at the end of the row
    let newCell = newRow.insertCell();
    
    // Append a text node to the cell
    let newText = document.createTextNode('new row');
    newCell.appendChild(newText);
    

    
// Untuk menghilangkan text dalam box setelah melakukan event
studentNIM.value = '';
studentName.value = '';
rb.value = 'male';
value = '-1';
value2 = '-1';
}


function removeFaculty(event) {
    if(event.target.classList.contains('delete')) {
      const li = event.target.parentElement;
      playerLi.removeChild(li);
    }
  }
  

// Untuk Search list
const search = document.querySelector('#search');
search.addEventListener('keyup', searchPlayer);

function searchPlayer(event) {
    let searchText = event.target.value.toLowerCase();
  
    let listOfFaculties = [...document.querySelectorAll('td')]; // [...document] itu mengubah menjadi array
    
    listOfFaculties.forEach((player) => {
      let playerName = player.firstChild.textContent;
  
      if(playerName.toLowerCase().indexOf(searchText) != -1) { // indexOff mengubah indec array menjadi -1 & 1, 2, ,3, dst
        player.style.display = 'block'; // block itu menampilkan
      } else {
        player.style.display = 'none'; // none itu tidak menampilkan
      }
    });
  }
  




