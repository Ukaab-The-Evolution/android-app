import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";
import { AuthProvider } from "./contexts/AuthContext";


const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={Theme}>
                <AuthStackNavigator/>
            </ThemeProvider>
        </AuthProvider>
    );
};
export default App;
