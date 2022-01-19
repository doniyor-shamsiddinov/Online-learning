import React, { lazy } from 'react'

const Home = lazy(()=>import('../modules/home/container'))
const Careers = lazy(()=>import('../modules/careers'))
const Blog = lazy(()=>import('../modules/blog'))
const About = lazy(()=>import('../modules/aboutUs'))
const Auth = lazy(()=>import('../modules/auth'))

export const routes = [
    {
        private: false,
        component: Home,
        path:'/'
    },
    {
        private: false,
        component: Careers,
        path:'/careers'
    },
    {
        private: false,
        component: Blog,
        path:'/blog'
    },
    {
        private: false,
        component: About,
        path:'/about'
    },
    {
        private: false,
        component: Auth,
        path:'/auth'
    }
    
]