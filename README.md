# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<!-- I the Todo app -->
makin Two component on for the Input todo
and Other is for Two List
<!-- Rtk -->
i use the Rtk(redux toolkit)
i create a store 
inside the store i make two slice one for the TodoList 
<!-- add into array -->
in todoslice the action.paylod is push in the empty array
make an array of todo
<!-- second slice -->
second slice for the todo which is done .and mark as complete 
where is use that todo into an array all the completed todsare push on tha array
<!-- functionality -->
addtodo,
delete todo
mark as complted todo
<!-- To Perevent the todo lost  after the refresh the browser -->
to prevet the todo lost .i use the redux-persist .it helps to store the data in local storage
