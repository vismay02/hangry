import React from "react"
import { Image, StyleSheet, Text,View } from "react-native"

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    },
    imageStyle:{
       width:250,
       height:120,
       borderRadius:2,
       marginBottom:5,
    },
    nameStyle:{
        fontWeight:'bold',
        fontSize:12,
    }
})

export default ResultsDetail