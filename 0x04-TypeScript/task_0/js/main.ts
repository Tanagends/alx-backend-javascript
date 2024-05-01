interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

const student1: Student = { firstName: 'Tanatswa', lastName: 'Gendere', age: 23, location: 'Zimbabwe' };
const student2: Student = { firstName: 'Aldridge', lastName: 'Chikowore', age: 23, location: 'Zimbabwe' };

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.append(table);

const rowHead: HTMLTableRowElement = document.createElement('tr');
const thName: HTMLTableCellElement = document.createElement('th');
const thPlace: HTMLTableCellElement = document.createElement('th');

thName.textContent = 'First Name';
thPlace.textContent = 'Location';
table.append(rowHead);
rowHead.append(thName);
rowHead.append(thPlace);

for (const el: Student of studentsList) {
  const row: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableCellElement = row.insertCell(0);
  nameCell.textContent = el.firstName;
  const placeCell: HTMLTableCellElement = row.insertCell(1);
  placeCell.textContent = el.location;
  row.appendChild(nameCell);
  row.appendChild(placeCell);
  table.appendChild(row);
}
