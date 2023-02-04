import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChanged, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChanged}
            onEndEditing={onTermSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor:"#EBEBEB",
        height:50,
        marginHorizontal:20,
        marginTop:20,
        borderRadius: 16,
        flexDirection:'row',
        
    },
    inputStyle: {
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:10,
    }
})

export default SearchBar