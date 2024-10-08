export default function getListStudentIds(ids) {
  if (ids instanceof Array) {
    return ids.map((ids) => ids.id);
  }
  return [];
}
