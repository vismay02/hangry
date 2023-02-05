import React, {useState, useEffect} from "react"
import { FlatList, Image, StyleSheet, Text } from "react-native"
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

   const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
   }
   useEffect(() => {
    getResult(id)
   },[])

   if(!result){
    return null
   }

    return(
        <>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image  style={styles.imageStyle} source={{uri: item}}
            />
        }}
        />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        height:220,
        marginBottom:8,
    }
})

export default ResultsShowScreen