function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map((one) => one.id);
}

export default getListStudentIds;
