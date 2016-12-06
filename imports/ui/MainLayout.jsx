// Libs
import React, {Component} from 'react'

// Components
import NavigationBar from './NavigationBar'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

// MainLayout - site layout
export default class MainLayout extends Component {

    render() {

        return (
            <div>
                <NavigationBar/>
                <Home/>
                <Projects/>
                <About/>
                <Contact/>
            </div>
        )

    }

}







