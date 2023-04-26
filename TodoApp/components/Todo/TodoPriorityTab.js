import React,{useEffect,useState} from 'react'
import { Dimensions, View, Text } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Tab from './Tab'
import { useSelector } from 'react-redux'
import todoStyles from '../../styles/Todo.css'
export default function TodoTabs({ tasks,navigation }) {
    const layout = Dimensions.get('window')
    
    const High = () => <Tab />
    const Medium = () => <Tab />
    const Low = () => <Tab />
    const scenes = SceneMap({
        High: High,
        Low: Low,
        Medium: Medium
    })
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'High', title: 'High' },
        { key: 'Medium', title: 'Medium' },
        { key: 'Low', title: 'Low' },
    ]);
    return (
        
        <TabView
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderScene={scenes}
            navigationState={{ index, routes }}
            swipeEnabled={false}
            
        />
        
    )
}