import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";
import 'react-native-url-polyfill/auto'
import AyanAuthProvider from "./providers/AyanAuthProvider.tsx";
import { AuthProvider } from "./contexts/AuthContext";


const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={Theme}>
                <AyanAuthProvider>
                    <AuthStackNavigator/>
                </AyanAuthProvider>
            </ThemeProvider>
        </AuthProvider>
    );
};
export default App;
