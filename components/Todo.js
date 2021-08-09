import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Todo = ({name, deleteItem})=> {
   
    return (
        <View style={[styles.item, {margin:8, padding:8}]}>
            <Text> {name}</Text>
            
                <Button 
                title={"delete"}
                color={"red"}
                onPress={()=>deleteItem(name) }
                />

           
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'grey',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'whitesmoke',
    }
})


export default Todo;