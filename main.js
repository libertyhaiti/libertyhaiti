function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null)
    {
        insertNewRecord(formData);
    }
    else{
        updateRecord(selectedRow);
    }
}


let student = [];

 //Constructor for student
    class Student{
        constructor
        (firstname, lastname, id, score){
        this.first = firstname;
        this.last = lastname;
        this.id = id;
        this.score = score;
    }
    }

//get the student info
function readFormData(){
    let student = new Student();
       let first_name = document.getElementById('firstName').value;
       let last_name = document.getElementById('lastName').value;
       let id_student = document.getElementById('id').value;
       let score_student = document.getElementById('score').value;
}
// add row with student info 
    
       function myStudent(){
      
        var table = document.getElementById("myTable");
        var row = table.insertRow(table.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = document.getElementById('firstName').value;
        cell2.innerHTML = document.getElementById('lastName').value;
        cell3.innerHTML = document.getElementById('idstudent').value;
        cell4.innerHTML = document.getElementById('scorestudent').value;
        cell5.innerHTML = `<button onClick='onEdit(this)' class="focus:outline-none focus-visible:ring ... bg-blue-500 opacity-40 hover:bg-blue-600 active:bg-blue-700 px-9 py-3 rounded-full active:bg-blue-300 text-white ">Edit</button> <button onClick='onDelete(this)' class="focus:outline-none focus-visible:ring ... bg-blue-500 opacity-40 hover:bg-blue-600 active:bg-blue-700 px-9 py-3 rounded-full active:bg-blue-300 text-white">delete</button>`;
        resetForm();
       }

// edit row with student info

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('idstudent').value = selectedRow.cells[2].innerHTML;
    document.getElementById('scorestudent').value = selectedRow.cells[3].innerHTML;
   
}

function onUpdate(Student){

 selectedRow.cells[0].innerHTML = firstName.value;
 selectedRow.cells[1].innerHTML = lastName.value;
 selectedRow.cells[2].innerHTML = idstudent.value;
 selectedRow.cells[3].innerHTML = scorestudent.value;
 resetForm();
}

//delete the data 


function onDelete(td){
    if(confirm('Are you sure you want to delete this?')){
        row = td.parentElement.parentElement;
        document.getElementById('myTable').deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset form data

function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('idstudent').value = '';
    document.getElementById('scorestudent').value = '';

}






