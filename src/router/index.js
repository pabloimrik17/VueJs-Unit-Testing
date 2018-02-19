import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/HelloWorld';
import List from '@/components/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: List,
    },
  ],
});
