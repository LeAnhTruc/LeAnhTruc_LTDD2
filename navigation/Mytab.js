import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeScreen,setting ,Cart,User} from '../screen';
import Icon from "react-native-vector-icons/FontAwesome"
import { Footer } from '../component';
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
      if (!route || !route.name) {
          // Xử lý khi `router` không tồn tại hoặc không có thuộc tính 'name'
          return null; // hoặc có thể trả về giá trị mặc định khác
      }
      let screenName = route.name
      let iconName = 'cogs'
      if (screenName == 'homeScreen') {
          iconName = "align-center";
      } else if (screenName == 'Setting') {
          iconName = "cogs";
      } else if (screenName == 'Cart') {
          iconName = "cart-plus";
      }
      else if (screenName == 'User') {
        iconName = "user";
    }
      return <Icon name={iconName} size={20} color={focused ?'purple':'black'} />
  },
  headerShown: false,
  tabBarActiveTintColor: 'purple',
  tabBarInactiveTintColor: 'purple',

})
function MyTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="homeScreen" component={homeScreen} />
      <Tab.Screen name="Cart" component={Cart}/>
      <Tab.Screen name="setting" component={setting} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default MyTab