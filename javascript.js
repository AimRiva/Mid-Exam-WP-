let form = document.querySelector ('form');
form.addEventListener('submit', insertStudent);

// const search = document.querySelector('#search');
// search.addEventListener('keyup', searchFaculty);


// Jquery
$(document).on('click','.delete-button', function(){
    $(this).parents('tr').remove();
});


// let resetTab = document.querySelector ('.btn');
// resetTab.addEventListener('click', reset);

// function reset(){
//     // let defaultA = document.querySelector("#facultySelect");
//     // let setA = defaultA.children[defaultA.selectedIndex].defaultSelected =true;

//     // console.log(setA).defaultSelected;

//     // let defaultA = document.querySelector("#facultySelect");
//     // let setA = defaultA.select.options[defaultA.selectedIndex].value;
//     // setA.selectedIndex = -1;

//     let vSelect = document.getElementById('facultySelect')
//     let vIndex = vSelect.selectedIndex;
//     let vOption = vSelect.options[vIndex];

//     let vValue = vOption.value;
    

//     let defaultB = document.querySelector("programStudy");

// }


function insertStudent(e) {
    e.preventDefault();

    // select_element.options[the_index].defaultSelected = true;
    // select_element.children[/*selected index*/].defaultSelected = true

    


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
    console.log(value2);

    console.log(`${studentNIM.value} / ${studentName.value} / ${genderI} / ${value} / ${value2}`);


    let tbodyRef = document.getElementById('tableStu').getElementsByTagName('tbody')[1];
    var row = tbodyRef.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    let textCell1 = document.createTextNode(`${studentNIM.value}`);
    cell1.appendChild(textCell1);
    let textCell2 = document.createTextNode(`${studentName.value}`);
    cell2.className = "stuName";
    cell2.appendChild(textCell2);
    let textCell3 = document.createTextNode(`${genderI}`);
    cell3.appendChild(textCell3);
    let textCell4 = document.createTextNode(`${value}`);
    cell4.appendChild(textCell4);
    let textCell5 = document.createTextNode(`${value2}`);
    cell5.appendChild(textCell5);
    // let textCell6 = document.createTextNode(`${studentNIM.value}`);
    // cell1.appendChild(textCell6);
    cell6.innerHTML = '<a href="#" class="delete-button"><i class="material-icons">person_remove</i>';


    studentNIM.value = '';
    studentName.value = '';
    document.getElementById('facultySelect').value="-1";
    document.getElementById('programStudy').value="-1";

    // document.querySelector('#gender')DefaultChecked={index === 0};
    // document.querySelector('.form-check-input').value = "Male";

}



function searchArticles() {
    search('searchArticles', 'tableStu');
}
    
function search(searchInput, searchTable) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(searchInput);
    filter = input.value.toUpperCase();
    table = document.querySelector("#tableStu");
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}





let searchF = document.querySelector ('#facultySearchB');
searchF.addEventListener('click', searchTable);


function searchTable() {

    let select3 = document.querySelector ('#facultySearch');
    let value3 = select3.options[select3.selectedIndex].value;
    

    input = document.getElementById(value3);
    filter = value3.toUpperCase();
    table = document.querySelector("#tableStu");
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



let searchPS = document.querySelector ('#programSearchB');
searchPS.addEventListener('click', searchTablePS);


function searchTablePS() {

    let select4 = document.querySelector ('#programSearch');
    let value4 = select4.options[select4.selectedIndex].value;
    
    input = document.getElementById(value4);
    filter = value4.toUpperCase();
    table = document.querySelector("#tableStu");
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


