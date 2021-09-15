import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './card';
function App() {
  const [countries, setCountries] = useState({
    data: '',
    loading: true
  })

  const handleFetch = async () => {
    setCountries({
      data: '',
      loading: true
    })
    const data = await axios.get('https://restcountries.eu/rest/v2/region/asia')
    setCountries({
      data: data,
      loading: false
    })
    console.log(data)
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl pb-6 pt-6">
        Asian Countries
      </h1>
      <button onClick={handleFetch} className="mb-5 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
        Fetch Data
      </button>
      <div>
        {countries.loading ? <div class=" flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div> : <div class="grid grid-cols-3 gap-4">
          {countries.data.data.map((c) => (
            <Card countryName={c.name} capital={c.capital} flag={c.flag} region={c.region} subregion={c.subregion} borders={c.borders} languages={c.languages} />
          ))}</div>}

      </div>
    </div>
  )
}

export default App;
