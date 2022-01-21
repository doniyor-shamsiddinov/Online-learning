import React, { Suspense, useState} from 'react'

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'

import { routes } from './routes.path';
import Header from '../components/header/index'
import Footer from '../components/footer/index'


export default function Routess () {
    return <>
        <Header />
        <Suspense fallback={<>Loading...</>}>
            <Switch>
                {
                    routes.map((route, index) => {
                        return <Route key={index} exact {...route}/>
                    })
                }
            </Switch>
        </Suspense>
        <Footer />
    </>

}