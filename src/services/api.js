import axios from 'axios';

const API_BASE_URL = 'https://api.coinbase.com/v2';

export const fetchExchangeRates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/exchange-rates?currency=EUR`);
        return response.data.data.rates;
    } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
        throw error;
    }
};