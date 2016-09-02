window.onload = function () {
    var students = [
        {"name": "Hans", "email": "ha@mail.com", "phone": "29384756", "category" : "Red", "groupname" : "Los Gropos Maximus"},
        {"name": "Grethe", "email": "gr@mail.com", "phone": "28394056", "category" : "Yellow", "groupname" : "Trunteklubben"},
        {"name": "Lise", "email": "li@mail.com", "phone": "39483746", "category" : "Green", "groupname" : "Trunteklubben"},
    ];

    var tableBody = document.getElementById("studentTable");
    var populateTable = function () {
        tableBody.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var row = tableBody.insertRow();
            row.insertCell(0).innerHTML = students[i].name;
            row.insertCell(1).innerHTML = students[i].email;
            row.insertCell(2).innerHTML = students[i].phone;
            row.insertCell(3).innerHTML = students[i].category;
            row.insertCell(3).innerHTML = students[i].groupname;
        }
    };

    populateTable();

    var studentForm = document.getElementById("studentForm");
    var studentSelect = document.getElementById("studentSelect");

    studentForm.onsubmit = function (event) {
        event.preventDefault();
//        console.log("Firstname: " + studentForm.elements["firstname"].value);
        var student = {};
        student.name = studentForm.elements["name"].value;
        student.email = studentForm.elements["email"].value;
        student.phone = studentForm.elements["phone"].value;
        student.groupname = studentForm.elements["groupname"].value;
        student.category = studentSelect.options[studentSelect.selectedIndex].text;
        students.push(student);
        populateTable();
    };
    
};

