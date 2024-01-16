function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.reduce((sum, { id }) => sum + id, 0);
}

export default getStudentIdsSum;
