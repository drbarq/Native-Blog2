import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


const BlogPostForm = ( props ) => {
    const [title, setTitle] = useState(props.initialValue.title)
    const [content, setContent] = useState(props.initialValue.content)

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={(title) => setTitle(title)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={(content) => setContent(content)}
            />
            <Button 
                title="Save Blog Post"
                onPress={() => props.onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValue: {
        title: '',
        content:''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18, 
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm