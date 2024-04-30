export default function updateStudentGradeByCity(students, city, newGrades) {
  return (students
    .filter((el) => el.location === city))
    .map((ele) => {
      for (const elem of newGrades) {
        if (elem.studentId === ele.id) {
          return { ...ele, grade: elem.grade };
        }
      }
      return { ...ele, grade: 'N/A' };
    });
}
