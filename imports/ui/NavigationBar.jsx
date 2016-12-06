// Libs
import React, {Component} from 'react'
import {Grid, Menu} from 'semantic-ui-react'

// NavigationBar - top menu, hidden on mobile
export default class NavigationBar extends Component {

    state = {activeItem: 'home'}

    _handleItemClick = (e, {name}) => this.setState({activeItem: name})

    componentDidMount() {
        $('.navigation-bar').visibility({
            type: 'fixed',
            zIndex: 1001
        });
    }

    render() {

        const {activeItem} = this.state

        return (
            <div className='navigation-bar'>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}/>
                    <Grid.Column width={6}>NoMoreAnalog</Grid.Column>
                    <Grid.Column width={7}>
                        <Menu floated='right' secondary pointing>
                            <Menu.Item as='a' href='#home' name='home' active={activeItem === 'home'} onClick={this._handleItemClick}/>
                            <Menu.Item as='a' href='#projects' name='projects' active={activeItem === 'projects'} onClick={this._handleItemClick}/>
                            <Menu.Item as='a' href='#about' name='about' active={activeItem === 'about'} onClick={this._handleItemClick}/>
                            <Menu.Item as='a' href='#contact' name='contact' active={activeItem === 'contact'} onClick={this._handleItemClick}/>
                        </Menu>
                    </Grid.Column>
                </Grid>
            </div>
        )

    }

}