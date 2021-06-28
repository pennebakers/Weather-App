import React from 'react'
import Language from './Language'
import Weather from './Weather'

const Country = ({filterCountries}) => {
    const a_key = '23b846ed1c225353d9d17122a9dc5d6d'

    const params = {
        access_key: `${a_key}`,
        query: `${filterCountries[0].capital}`
    }

   
    return (
        <div>
            <h1>Country: {filterCountries[0].name}</h1>
            <h4>capital {filterCountries[0].capital}</h4>
            <h4>population {filterCountries[0].population}</h4>
            <h2>languages</h2>
            <Language filterCountries={filterCountries}/>
            <img src={filterCountries[0].flag} alt="flag"/>
            <Weather capital={filterCountries[0].capital} params={params}/>
        </div>
    )
}

export default Country