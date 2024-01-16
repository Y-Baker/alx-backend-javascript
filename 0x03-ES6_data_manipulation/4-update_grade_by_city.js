export default function updateStudentGradeByCity(studentList, city, gradeList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((student) => student.location === city).map((student) => {
    const gradeObj = gradeList.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });
}
