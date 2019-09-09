import React, { useContext } from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = (props) => {
    const { state, deleteBlogPost } =  useContext(Context)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}> {item.title} - {item.id} </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon}></Feather>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
                <Feather 
                    name='plus' 
                    style={styles.header}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    }, 
    icon: {
        fontSize: 24
    },
    header: {
        marginRight: 10,
        fontSize: 30
    }
})

export default IndexScreen