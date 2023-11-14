import {LangProvider} from "../context/language/LanguageProvider";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../pages/Auth/Login";
import {View} from "react-native";

const Stack = createStackNavigator()

export default function AuthNavigation(){
    return (
        <LangProvider>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Login" component={Login} />
                </Stack.Navigator>
        </LangProvider>
    );
}