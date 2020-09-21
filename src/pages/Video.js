import React from 'react'
import {  Link, Route } from 'react-router-dom'
import Fluter from './video/Fluter'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'


function Video() {
    return (
        
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/Video/" exact>flutter!</Link></li>
                    <li><Link to="/Video/reactpage">reactpage!</Link></li>
                    <li><Link to="/Video/vue">vue!</Link></li>

                </ul>
            </div>
            <div className="videoContent">
                <Route path='/Video/' exact component={Fluter}></Route>
                <Route path='/Video/reactpage/' exact component={ReactPage}></Route>
                <Route path='/Video/vue/' exact component={Vue}></Route>
            </div>
            </div>
        
    )
}
export default Video