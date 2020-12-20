export const exit = (values) => {
  if (!window || !values) return false;
  for (let key in values) {
    window.localStorage.removeItem(key);
  }
  return true;
};
