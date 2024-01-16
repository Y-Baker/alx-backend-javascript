function getStudentsByLocation(list, city) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.filter((one) => one.location === city);
}

export default getStudentsByLocation;
