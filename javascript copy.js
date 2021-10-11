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



    var table = document.querySelector('#tableDad');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    var cell4 = row.insertCell(-1);
    var cell5 = row.insertCell(-1);
    var cell6 = row.insertCell(-1);
    cell1.innerHTML = `${studentNIM.value}`;
    cell2.innerHTML = `${studentName.value}`;
    cell3.innerHTML = `${genderI}`;
    cell4.innerHTML = `${value}`;
    cell5.innerHTML = `${value2}`;
    cell6.innerHTML = '<a href="#" class="delete-button"><i class="material-icons">person_remove</i></a>';

// create element li

// const li = document.createElement('td');
// li.className = 'student';

// const liNIM = document.createTextNode(`${studentNIM.value}`);

// const liName = document.createTextNode(`${studentName.value}}`);
// const liGen = document.createTextNode(`${genderI.value}}`);
// const liFac = document.createTextNode(`${value}}`);
// const liPro = document.createTextNode(`${value2}}`);
// li.appendChild(liNIM);
// li.appendChild(liName);
// li.appendChild(liGen);
// li.appendChild(liFac);
// li.appendChild(liPro);
// console.log(li);

// const tr = document.createElement('tr');
// tr.appendChild(li);
// console.log(tr);

// const tbody = document.querySelector('#tableStu');
// tbody.appendChild(tr);
// console.log(tbody);

// add li element to the parent ul element
// const table = document.querySelector('#tableDad');
// table.appendChild(tbody);
// console.log(table);


// const td = document.createElement('td')

// const tdText = document.createTextNode(`${Dad.value}`);
// document.createElement
// td.appendChild(tdText);
// console.log(td);

// // add li element to the parent ul element
// const tr = document.getElementById('listStudent');
// tr.appendChild(td);
// console.log(td);

// // untuk menambah delete link di player tambahan
// let deleteLink = document.createElement('a');
// deleteLink.className = 'delete-button';
// deleteLink.setAttribute('href', '#');
// deleteLink.setAttribute()
// deleteLink.appendChild(document.createTextNode(' | delete this link'));

// li.appendChild(deleteLink);

// Untuk menghilangkan text dalam box setelah melakukan event
studentNIM.value = '';
studentName.value = '';
rb.value = '';
value = '';
value2 = '';

}


// // Untuk Search list
// const search = document.querySelector('#search');
// search.addEventListener('keyup', searchPlayer);





