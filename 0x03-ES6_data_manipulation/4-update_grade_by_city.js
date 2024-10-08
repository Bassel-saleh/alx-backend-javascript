export default function updateStudentGradeByCity(list, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (list instanceof Array) {
    return list
      .filter((list) => list.location === city)
      .map((list) => ({
        id: list.id,
        firstName: list.firstName,
        location: list.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === list.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return {};
}
