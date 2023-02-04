import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import SearchBar from "./src/components/SearchBar";

const navigator = createStackNavigator({
  Search: SearchScreen,
  SearchBar:SearchBar
},{
  initialRouteName: 'Search',

  defaultNavigationOptions:{
    title:'Restaurant Search'
  }
})

export default createAppContainer(navigator)