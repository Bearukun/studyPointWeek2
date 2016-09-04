window.onload = function () {

    var students = [
        {"name": "Hans", "email": "ha@mail.com", "phone": "29384756", "category": "Red", "groupname": "Group 2"},
        {"name": "Grethe", "email": "gr@mail.com", "phone": "28394056", "category": "Yellow", "groupname": "Group 1"},
        {"name": "Lise", "email": "li@mail.com", "phone": "39483746", "category": "Green", "groupname": "Group 1"}
    ];

    var tableBody = document.getElementById("studentTable");

    var populateTable = function () {
        tableBody.innerHTML = "";
        for (var i = 0; i < students.length; i++) {

            //Inserting row
            var row = tableBody.insertRow();

            //Creating the delete button
            var delButton = document.createElement("button");
            
            delButton.className = "btn btn-danger";
            delButton.id = i + "delButton";
            delButton.onclick = function () {
                deleteRow(this.id);
                
            };

            var delButtonTxt = document.createTextNode("Delete");
            delButton.appendChild(delButtonTxt);

            row.insertCell(0).innerHTML = i;
            row.insertCell(1).innerHTML = students[i].name;
            row.insertCell(2).innerHTML = students[i].email;
            row.insertCell(3).innerHTML = students[i].phone;
            row.insertCell(4).innerHTML = students[i].category;
            row.insertCell(5).innerHTML = students[i].groupname;
            row.insertCell(6).appendChild(delButton);
            
        }
    };

    populateTable();

    var studentForm = document.getElementById("studentForm");
    var studentSelect = document.getElementById("studentSelect");

    studentForm.onsubmit = function (event) {

        event.preventDefault();
        var student = {};
        student.name = studentForm.elements["name"].value;
        student.email = studentForm.elements["email"].value;
        student.phone = studentForm.elements["phone"].value;
        student.groupname = studentForm.elements["groupname"].value;
        student.category = studentSelect.options[studentSelect.selectedIndex].text;
        students.push(student);
        populateTable();
    };

    var deleteAll = document.getElementById("deleteAll");

    deleteAll.onclick = function () {
        students.length = 0;
        populateTable();
        
    };

    var deleteRow = function (id) {
        
        var del = id.substring(0, 1);
        students.splice(del, 1);
        populateTable();
    
    };

};