import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";
import 'react-native-url-polyfill/auto'
import AuthProvider from "./providers/AuthProvider.tsx";


const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <AuthProvider>
                <AuthStackNavigator/>
            </AuthProvider>
        </ThemeProvider>
    );
};
export default App;
