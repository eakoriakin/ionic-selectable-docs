export const state = () => ({
  currentProject: { name: 'Home', path: '/' },
  projects: [
    { name: 'Home', path: '/' },
    { name: 'Angular Quick Forms', path: '/angular-quick-forms' },
    { name: 'Ionic Selectable', path: '/ionic-selectable' },
  ],
});

export const mutations = {
  setCurrentProject(state, project) {
    state.currentProject = project;
  },
  // remove(state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1);
  // },
  // toggle(state, todo) {
  //   todo.done = !todo.done;
  // },
};
