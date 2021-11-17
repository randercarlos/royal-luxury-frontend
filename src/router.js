import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home';
const AvailableRooms = () => import(/* webpackChunkName: "available-rooms" */ '@/views/AvailableRooms');
const Events = () => import(/* webpackChunkName: "events" */ '@/views/Events');
const Blog = () => import(/* webpackChunkName: "blog" */ '@/views/Blog');
const About = () => import(/* webpackChunkName: "blog" */ '@/views/About');
const Booking = () => import(/* webpackChunkName: "booking" */ '@/views/Booking');
const Contact = () => import(/* webpackChunkName: "contact" */ '@/views/Contact');


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/available-rooms",
    component: AvailableRooms,
  },
  {
    path: "/booking",
    component: Booking,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
