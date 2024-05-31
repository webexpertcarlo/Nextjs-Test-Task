"use client"

import React, { useEffect, useState } from 'react';
import { fetchExchangeRates } from '../services/api';
import { useTranslation } from 'react-i18next';
import Toast from '@/pages/Toast';

const Home = () => {
  const [rates, setRates] = useState(null);
  const { t, i18n } = useTranslation();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rates = await fetchExchangeRates();
        setRates(rates);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  const getIconUrl = (crypto) => {
    return `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/icon/${crypto.toLowerCase()}.png`;
  };

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage)
    i18n.changeLanguage(selectedLanguage);
  };


  return (
    <>
      {error && <Toast message={error} onClose={closeToast} />}

      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full mb-3 p-5">
          <h1 className="text-4xl items-center font-bold mr-4">Exchange Rates</h1>

        </div>
        <div className="flex justify-end items-center w-full mb-3 p-5 pr-10 pt-0 pb-0">
          <select className="mr-4" style={{ padding: '0.5em', fontSize: '1em' }} onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 pt-2">
          {rates && Object.entries(rates).map(([crypto, rate]) => (
            <div key={crypto} className="p-4">
              <a href="#" className="flex flex-col items-center p-4 bg-[#2F3440] text-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">

                <img className="object-cover rounded-full h-[60px] w-[60px]" src={getIconUrl(crypto)} alt={crypto} onError={(e) => { e.target.style.display = 'none'; }} />

                <div className='currency pl-4'>
                  <div className='leftData'>
                    <span className='mt-1 block'>{crypto}</span>
                  </div>
                </div>
                <div className='rightData ml-auto text-right'>
                  <h5>{`${crypto}/EUR`}</h5>
                  <span className='pt-1 block'>{`${parseFloat(rate).toLocaleString(undefined, { maximumFractionDigits: 2 })} / ${parseFloat(rates['EUR']).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
