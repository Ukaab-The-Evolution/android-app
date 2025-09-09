import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";
import 'react-native-url-polyfill/auto'
import AyanAuthProvider from "./providers/AyanAuthProvider.tsx";


const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <AyanAuthProvider>
                <AuthStackNavigator/>
            </AyanAuthProvider>
        </ThemeProvider>
    );
};
export default App;
