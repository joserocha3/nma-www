// Libs
import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'

// NavigationBar - top menu, hidden on mobile
export default class Home extends Component {

    render() {

        return (
            <div className='home' id='home'>
                <Grid centered verticalAlign='middle'>
                    <Grid.Column textAlign='center'>
                        <Header size='huge' inverted>We Make Cool Stuff</Header>
                    </Grid.Column>
                </Grid>
            </div>
        )

    }

}