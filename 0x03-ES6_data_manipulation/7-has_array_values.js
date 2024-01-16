function hasValuesFromArray(set, list) {
  const newSet = new Set(list);

  for (const one of newSet) {
    if (!set.has(one)) return false;
  }
  return true;
}

export default hasValuesFromArray;
