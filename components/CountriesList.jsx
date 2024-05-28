import React, {useState,useEffect} from 'react'
import CountryCard from './CountryCard'

export default function CountriesList({searchQuery}) {
  const [countriesData, setcountriesData] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((raw)=>raw.json())
    .then((data) => {
     setcountriesData(data)
  })
  },[])

    
  return (
    <div className="countries-container">
      {
        countriesData.
        filter((country)=>{
         return country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        })
        .map((country)=>{
          return(
            <CountryCard 
            key={country.name.common}
            name={country.name.common} 
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            />
          )
        })
      }
    </div>
    )
     
}
