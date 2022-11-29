// import Vue from 'vue';
// import VueShowdown from 'vue-showdown';

// // the second parameter of Vue.use() is optional
// Vue.use(VueShowdown, {
//   // set default flavor of showdown
//   flavor: 'github',
//   // set default options of showdown (will override the flavor options)
//   options: {
//     emoji: false,
//   },
// });

import Vue from 'vue';
import { VueShowdown } from 'vue-showdown'; // remember to import the esm build of vue-showdown, i.e. vue-showdown.esm.js

Vue.component('VueShowdown', VueShowdown);
