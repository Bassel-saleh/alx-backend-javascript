export default function getStudentsByLocation(list, city) {
  if (list instanceof Array) {
    return list.filter((list) => list.location === city);
  }
  return [];
}
