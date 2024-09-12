import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: () => ({
        body: {
            bg: '#ffffff !important',
            color: '#000'
        },
    }),
};

const colors = {
    brand: {
        100: '#E3B702',
        200: '#322D7B',
        300: '#28282899',
        400: '#363636',
        500: '#F2F2F2',
        600: '#E5DBD2',
        700: '#B4BFE4',
        800: '#CED1DB',
        900: '#999999',
        1000: '#453ea8',
    },

    alt: {
        100: '#A3A1A1',
        200: '#666666'
    }
    
};

const fonts = {
    heading: `'Source Serif 4 Variable', serif`,
    body: `'Manrope Variable', sans-serif`,
    sourceCode: `'Source Code Pro Variable', monospace`,
};

const components = {
  
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
