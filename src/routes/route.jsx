import React, { Suspense, useState} from 'react'

import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom'

import { routes } from './routes.path';
import Header from '../components/header/index'
import Footer from '../components/footer/index'


export default function Routess () {
    return <>
        <Header />
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                {
                    routes.map((route, index) => {
                        console.log(route)
                        return <Route key={index} exact {...route}/>
                    })
                }
            </Routes>
        </Suspense>
        <Footer />
    </>

}