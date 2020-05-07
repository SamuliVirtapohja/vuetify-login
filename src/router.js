import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
import Hello from './views/HelloWorld'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "hello",
            component: Hello
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
});