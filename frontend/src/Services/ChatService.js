export default {
  getChat: (user) => {
    return fetch("/user/getChat", {
      method: "get",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  sendMessage: (payload) => {
    return fetch("/chat/sendMessage", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401 && res.status !== 500)
        return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  getAllMessages: (payload) => {
    // console.log(payload);
    return fetch("/chat/getAllMessages", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401 && res.status !== 500)
        return res.json().then((data) => {
          // console.log(data);
          return data;
        });
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
};
