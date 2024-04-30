import getListStudents from "./0-get_list_students.js";


export default function getStudentsByLocation(students, city) {
  return students.filter(el => el.location === city);
}
