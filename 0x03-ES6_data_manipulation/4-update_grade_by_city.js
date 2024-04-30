import getListStudents from "./0-get_list_students.js";


export default function updateStudentGradeByCity(students, city, newGrades) {

  return (students.filter(el => el.location === city)).map((ele) => {
	    for (let elem of newGrades) {
	      if (elem.studentId === ele.id) {
	        ele.grade = elem.grade;
		return ele;
	      }
	    }
	    ele.grade = 'N/A';
	    return ele;
	    });
}

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

