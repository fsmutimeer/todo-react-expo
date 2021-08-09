import React, { useState } from 'react'
import { Button, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import Todo from './Todo'

const TodoList = () => {
    const [title, setTitle] = useState('TodoList');
    const [text, setText] = useState();
    const [list, setList] = useState(['Hello World']);


    //Add Todos

    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
    }
    // end of add todos

    //***********//

    //Delete todos

    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index);

        setList(updatedList);
    }

    //end of delete todos



    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>

                {list.map((x, index) => <Todo key={index} name={x} index={index} deleteItem={deleteItem} />)}

            </ScrollView>
            <View>
                <TextInput
                    placeholder="Add Todos"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    style={styles.input} />
                <Button onPress={addItem} title='Add Item' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    align: {
        alignSelf: 'center',
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "purple"

    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        padding: 8

    }

})

export default TodoList