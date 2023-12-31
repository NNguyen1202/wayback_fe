export const base_url = "https://wayback-wb.azurewebsites.net/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? localStorage.getItem("token") : ""
    }`,
    Accept: "application/json",
  },
};
