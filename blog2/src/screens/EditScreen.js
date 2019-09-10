import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ( props ) => {
    const { state, editBlogPost } = useContext(Context)

    const id = props.navigation.getParam('id')

    const blogPost = state.find(
        blogPost => blogPost.id === id 
    )

    return (
        <BlogPostForm
            initialValue={{ title: blogPost.title, content: blogPost.content}} 
            onSubmit={(title, content) => {
                editBlogPost(id, title, content)
                }
            }
        />
    )
}

const styles = StyleSheet.create({})

export default EditScreen