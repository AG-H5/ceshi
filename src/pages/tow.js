import React from 'react';
import { Route, Link } from 'react-router-dom';
import Css from '../pages/jineng/css'
import Jq from '../pages/jineng/Jq'
import Js from '../pages/jineng/Js'

import "../index.css"
function Tow() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li>
                        <Link to='/jineng/'>Css</Link>
                    </li>
                    <li>
                        <Link to='/jineng/jq'>Jq</Link>
                    </li>
                    <li>
                        <Link to='/jineng/js'>Js</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Route path="/jineng/" exact component={Css}></Route>
                <Route path="/jineng/jq" component={Jq}></Route>
                <Route path="/jineng/js" component={Js}></Route>

            </div>

        </div>
    )
}
export default Tow