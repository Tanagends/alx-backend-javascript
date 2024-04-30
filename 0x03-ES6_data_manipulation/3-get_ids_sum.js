import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((total, el) => total + el.id, 0);
}

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
