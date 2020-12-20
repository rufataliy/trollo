export const checkRegisteration = () => {
  try {
    if (window) {
      const trollo_name = window.localStorage.getItem("trollo_name");
      const trollo_company = window.localStorage.getItem("trollo_company");
      return Boolean(trollo_name) || Boolean(trollo_company);
    }
  } catch (e) {
    console.log(e);
  }
};
