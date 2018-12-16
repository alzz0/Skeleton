const initState = {
  projects: [
    { id: "1", title: "title 1", body: "body 1" },
    { id: "2", title: "title 2", body: "body 2" },
    { id: "3", title: "title 3", body: "body 3" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      default:
          console.log("hi")
  }
  return state;
};
export default projectReducer;
