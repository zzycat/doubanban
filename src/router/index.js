import Vue from 'vue'
import Router from 'vue-router'
// import all views
import PagesView from '../views/Pages'
import BookView from '../views/Book'
import DetailView from '../views/Detail'
import GroupView from '../views/Group'
import HomeView from '../views/Home'
import LoginView from '../views/Login'
import MovieView from '../views/Movie'
import RegisterView from '../views/Register'
import SearchView from '../views/Search'
import StatusView from '../views/Status'
import SubjectView from '../views/Subject'
import TalionView from '../views/Talion'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
        path:'/pages/classify/subject/:id',
        name:'SubjectView',
        component:{
            default:PagesView,
            subject:SubjectView
        }
    },
    {
        path:'/search',
        name:'SearchView',
        component:SearchView
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
      },
      {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
      },
      {
        path: '*',
        redirect: '/pages/'
      }
  ]
})
