export const register = (values: DefaultRegisterValues) => {
  if (!window || !values) return false;
  for (let key in values) {
    window.localStorage.setItem(key, values[key]);
  }
  return true;
};
