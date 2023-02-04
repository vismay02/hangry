import React, {useState} from "react"
import { StyleSheet, Text, View } from "react-native"
import yelp from "../api/yelp"
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 25,
                    location:'New York City',
                    term: searchTerm
                }
               })
               setResults(response.data.businesses)
        }catch(error){
            setErrorMessage('Something went wrong!')
        }
    }
    //Call searchApi when component is 
    //first rendered. BAD CODE!
    //searchApi('Pasta') : infinite loop!!!
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChanged={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)} />
           {errorMessage ?  <Text>{errorMessage}</Text> : null}
           <Text>We have found {results.length} results</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen