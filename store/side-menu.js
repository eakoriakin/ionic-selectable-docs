export const state = () => ({
  items: [
    { name: 'Home', path: '/' },
    { name: 'Angular Quick Forms', path: '/angular-quick-forms' },
    { name: 'Ionic Selectable', path: '/ionic-selectable' },
  ],
});

// export const mutations = {
//   add(state, text) {
//     state.list.push({
//       text,
//       done: false,
//     });
//   },
//   remove(state, { todo }) {
//     state.list.splice(state.list.indexOf(todo), 1);
//   },
//   toggle(state, todo) {
//     todo.done = !todo.done;
//   },
// };
