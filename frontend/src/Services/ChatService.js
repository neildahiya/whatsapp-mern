export default {
  getAllChats: () => {
    return fetch("/user/todos").then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  getChat: (payload) => {
    // const {fromPerson, otherPerson} = payload
    // Chat.findOne({
    //   fromPerson, otherPerson
    // }).then(chat=>{
    //   resizeBy.status(200).send(JSON.stringify(chat))
    // }).catch()
  },
  // postTodo: (todo) => {
  //   return fetch("/user/todo", {
  //     method: "post",
  //     body: JSON.stringify(todo),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     if (response.status !== 401) {
  //       return response.json().then((data) => data);
  //     } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
  //   });
  // },
};
