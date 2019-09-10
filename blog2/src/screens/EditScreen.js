import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ( props ) => {
    const { state } = useContext(Context)

    const id = props.navigation.getParam('id')

    const blogPost = state.find(
        blogPost => blogPost.id === id 
    )

    console.log(blogPost)

    return (
        <BlogPostForm
            initialValue={{ title: blogPost.title, content: blogPost.content}} 
            onSubmit={(title, content) => console.log(title, content)}
        />
    )
}

const styles = StyleSheet.create({})

export default EditScreen