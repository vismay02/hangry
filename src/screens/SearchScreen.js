import React, {useState} from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultList from "../components/ResultsList"

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    
    const filterResultsByPrice = (price) => {
        //Price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChanged={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)} />
           {errorMessage ?  <Text>{errorMessage}</Text> : null}
           <ScrollView>
           <ResultList 
           results={filterResultsByPrice('$')} 
           title="Cost Effective" />
           <ResultList 
           results={filterResultsByPrice('$$')} 
           title="Bit Pricier" />
           <ResultList  
           results={filterResultsByPrice('$$$')} 
           title="Big Spender" />
           </ScrollView>    
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen