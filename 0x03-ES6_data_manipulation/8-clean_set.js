function cleanSet(set, starting) {
  return [...set].map((one) => {
    if (one.substr(0, starting.length) === starting) {
      return one.substr(starting.length);
    }
  }).filter((one) => one).join('-');
}

export default cleanSet;
