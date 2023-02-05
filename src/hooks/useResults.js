import { useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search',{

                params:{
                    limit: 50,
                    location:'San Jose',
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
    useEffect(() => {
        searchApi('pasta')
    },[])

    return [searchApi, results, errorMessage]
}