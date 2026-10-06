import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './pages/Home';
import RotasButtomCatalogo from './RotasButtomCatalogo';
import Sobre from './pages/Sobre';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{         
  headerShown:false,
  tabBarActiveTintColor: '#7B4A2D',
  tabBarInactiveTintColor: '#A1887F',
  tabBarStyle: { backgroundColor: '#F5ECD9', borderTopColor: '#D7C4A3' },
}}>

    <Tab.Screen
    name="Home"
    component={Home}
    options = {{
      tabBarLabel:"Home",
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>}}
    />

    <Tab.Screen
    name="Catalogo"
    component={RotasButtomCatalogo}
    options = {{
       tabBarLabel:"Catalogo",
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="bookshelf" color={color} size={size}/>}}
    />

 <Tab.Screen
    name="Sobre"
    component={Sobre}
    options = {{
       tabBarLabel:"Sobre",
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="feather" color={color} size={size}/>}}
    />

    </Tab.Navigator>
  );
}