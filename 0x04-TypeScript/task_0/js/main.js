var s1 = {
    firstName: 'yousef',
    lastName: 'ahmed',
    age: 19,
    location: 'egypt'
};
var s2 = {
    firstName: 'mahmoud',
    lastName: 'turkey',
    age: 20,
    location: 'egypt'
};
var studentList = [s1, s2];
var table = document.querySelector('table');
studentList.map(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
});
document.body.appendChild(table);
