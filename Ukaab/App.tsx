import * as React from "react";
import Theme from "./Theme.ts";
import {ThemeProvider} from "styled-components/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator.tsx";


const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <AuthStackNavigator/>
        </ThemeProvider>
    );
};
export default App;
