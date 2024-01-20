interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const s1: Student = {
    firstName: 'yousef',
    lastName: 'ahmed',
    age: 19,
    location: 'egypt'
};

const s2: Student = {
    firstName: 'mahmoud',
    lastName: 'turkey',
    age: 20,
    location: 'egypt'
};

const studentList: Student[] = [s1, s2];

const table: HTMLTableElement = document.querySelector('table');

studentList.map((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();

    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
});

document.body.appendChild(table);
