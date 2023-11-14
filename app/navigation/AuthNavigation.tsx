import {LangProvider} from "../context/language/LanguageProvider";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../pages/Auth/Login";
import Verify from "../pages/Auth/Verify";

const Stack = createStackNavigator()

export default function AuthNavigation(){
    return (
        <LangProvider>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Login" component={Login} />
                    <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Verify" component={Verify} />
                </Stack.Navigator>
        </LangProvider>
    );
}