// src/pages/_app.js

import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';




// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {

        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false
        }
    });

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);
