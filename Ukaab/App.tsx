import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";
<<<<<<< HEAD
import 'react-native-url-polyfill/auto'
import AyanAuthProvider from "./providers/AyanAuthProvider.tsx";
=======
import { AuthProvider } from "./contexts/AuthContext";
>>>>>>> origin/main


const App = () => {
    return (
<<<<<<< HEAD
        <ThemeProvider theme={Theme}>
            <AyanAuthProvider>
                <AuthStackNavigator/>
            </AyanAuthProvider>
        </ThemeProvider>
=======
        <AuthProvider>
            <ThemeProvider theme={Theme}>
                <AuthStackNavigator/>
            </ThemeProvider>
        </AuthProvider>
>>>>>>> origin/main
    );
};
export default App;
