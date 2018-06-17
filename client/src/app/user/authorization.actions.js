import callApi from "../../utils/apiService";

export function registerUser(user) {
  return callApi("auth/register", "post", user).then(res => {
    sessionStorage.setItem("token", res.token);
  });
}

export function loginUser(user) {
  return callApi("auth/login", "post", user).then(res => {
    if (res.token) {
      sessionStorage.setItem("token", res.token);
    }
  });
}
