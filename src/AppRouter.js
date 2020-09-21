import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/index'
import Video from './pages/Video'
import Jineng from './pages/tow'

import './index.css'

function AppRouter() {
    const datas = [
        { url: '/', title: '博客首页', exact: true, component: Index },
        { url: '/Video/', title: '视频教程', exact: false, component: Video },
        { url: '/jineng/', title: '职场技能', exact: false, component: Jineng },
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {/* <li><Link to="/">博客首页</Link></li>
                    <li><Link to="/Video/">视频教程</Link></li>
                    <li><Link to="/jineng/">职场技能</Link></li> */}
                        {
                            datas.map((item, index) => {
                                return (
                                    <li key={index}><Link to={item.url}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='rightMain'>
                    {/* <Route path="/" exact component={Index}></Route>
                    <Route path="/Video/" component={Video}></Route>
                    <Route path="/jineng/" component={Jineng}></Route> 
                    */}
                    {
                        datas.map((item)=>{
                            return(
                                <Route path={item.url} exact={item.exact} component={item.component}></Route>
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    )
}
export default AppRouter