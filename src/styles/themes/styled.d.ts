import 'styled-components';
declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors: {
            Color: string;
            Color_Primary: string;
            Color_Primary_80: string;
            Color_Light: string;
            Color_Light_Blur: string;
            Color_Menu_Focus: string;
            Color_MenuAfter: string;
            Color_MenuAfter_Focus: string;
            Color_Secundary: string;
            Color_History: string;
            Color_HistoryHolder: string;
            Color_tertiary: string;
        },
        fonts:{
            Font_Primary: string;
            Font_Secundary: string;
        },
        effects:{
            blur: string;
        },
        background:{
            background: string;
        }
    }
}