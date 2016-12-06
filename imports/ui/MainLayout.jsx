// Libs
import React, {Component} from 'react'

// Components
import NavigationBar from './NavigationBar'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import {Container} from 'semantic-ui-react'

// MainLayout - site layout
export default class MainLayout extends Component {

    render() {

        return (
            <div>
                <NavigationBar/>
                <Home/>
                <Container>
                    <Projects/>
                    <About/>
                    <Contact/>
                </Container>
            </div>
        )

    }

}







