// Libs
import React from 'react'
import {render} from 'react-dom'
import {Meteor} from 'meteor/meteor'

// Files
import '../imports/startup/client/main'

// Components
import MainLayout from '../imports/ui/MainLayout'

Meteor.startup(() => {
    render(<MainLayout />, document.getElementById('app'))
});