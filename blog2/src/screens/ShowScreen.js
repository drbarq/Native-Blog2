import React, { useContext } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = (props) => {
    const { state } = useContext(Context)

    const id = props.navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id )

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ( props ) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => props.navigation.navigate('Edit', {id: props.navigation.getParam('id')})}>
                <FontAwesome name="pencil" style={styles.icon}></FontAwesome>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        marginRight: 10
    }
})

export default ShowScreen