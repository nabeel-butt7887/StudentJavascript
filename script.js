var students = [];

function addStudent() {
    debugger;
    var name = document.getElementById("studentName").value;
    console.log("studentName");
    var studentClass = document.getElementById("studentClass").value;
    console.log("studentClass");
    var marks = document.getElementById("studentMarks").value;
    console.log("marks");
    var message = document.getElementById("message");


    if (name == "" || studentClass == "" || marks == "") {
        message.innerHTML = "please sari field fill karain";
        return;
    }
    if (Number(marks) < 0 || Number(marks) > 100) {
        message.innerHTML = "Marks 0 say 100 k darmyan honay cheay";
        return;
    }
    var student = {
        name: name,
        studentClass: studentClass,
        marks: Number (marks),
    };

    students.push(student);

    document.getElementById("studentName").value = "";
    document.getElementById("studentClass").value = "";
    document.getElementById("studentMarks").value = "";
    message.innerHTML = "";

    ShowStudent();

}
function ShowStudent(){
    var table = document.getElementById("StudentTable");
    var emptyMessage = document.getElementById("emptyMessage");
    table.innerHTML ="";
    if(students.length == 0){
        emptyMessage.style.display =  "block";
        
    }else{
        emptyMessage.style.display = "none"

    }
    for( var i =0; i < students.length; i++){
        var result = "pass";
        var resultClass = "pass";

        if(students[i].marks < 40){
            result = "need improvment";
            resultClass = "fail"
        }

        var row = document.createElement("tr");
        row.innerHTML = 
        "<td>" + students[i].name + "</td>" +
        "<td>" + students[i].studentClass + "</td>" +
        "<td>" + students[i].marks + "</td>" +
        '<td class="' + resultClass + '">' + result + "</td>" +
        '<td><button class="del-btn" onclick="deleteStudent('+ i + ')">Delete</button></td>';

        table.appendChild(row);
        }
        document.getElementById("totalCount").innerHTML = students.length;
        console.log(students);

}
function deleteStudent(index){
    students.splice(index,1);
    ShowStudent();
}
ShowStudent();