export default function getStudentIdsSum(list) {
  if (list instanceof Array) {
    return list.reduce(
      (prevstudent, curstudent) => prevstudent.id || prevstudent + curstudent.id,
      0,
    );
  }
  return 0;
}
