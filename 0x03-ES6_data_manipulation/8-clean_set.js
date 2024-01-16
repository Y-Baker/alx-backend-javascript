function cleanSet(set, starting) {
  if (starting === '') return '';

  return [...set].map((one) => {
    if (one && one.startsWith(starting)) {
      return one.substr(starting.length);
    }
    return undefined;
  }).filter((one) => one).join('-');
}

export default cleanSet;
