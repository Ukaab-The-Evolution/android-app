// styled.d.ts
import 'styled-components';
import {ThemeType} from "./Theme.ts";

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
