// Libs
import React, {Component} from 'react'
import {Container, Grid, Menu} from 'semantic-ui-react'

// NavigationBar - top menu, hidden on mobile
export default class NavigationBar extends Component {

    state = {activeItem: 'home'}

    _handleItemClick = (e, {name}) => this.setState({activeItem: name})

    // componentDidMount() {
    //     $('.navigation-bar').visibility({
    //         type: 'fixed',
    //         zIndex: 1001
    //     });
    // }

    render() {

        const {activeItem} = this.state

        return (
            <div className='navigation-bar'>
                <Container>
                    <Grid verticalAlign='middle' columns={2} padded>
                        <Grid.Row stretched>
                            <Grid.Column style={{marginTop: 14}}>NoMoreAnalog</Grid.Column>
                            <Grid.Column>
                                <Menu floated='right' size='large' secondary pointing>
                                    <Menu.Item href='#home' name='home' active={activeItem === 'home'} onClick={this._handleItemClick}/>
                                    <Menu.Item href='#projects' name='projects' active={activeItem === 'projects'} onClick={this._handleItemClick}/>
                                    <Menu.Item href='#about' name='about' active={activeItem === 'about'} onClick={this._handleItemClick}/>
                                    <Menu.Item href='#contact' name='contact' active={activeItem === 'contact'} onClick={this._handleItemClick}/>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )

    }

}