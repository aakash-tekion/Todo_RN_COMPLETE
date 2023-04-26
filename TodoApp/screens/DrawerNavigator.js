import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import BottomNavigator from './BottomNavigation'


const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:BottomNavigator
    }
})
export default DrawerNavigator