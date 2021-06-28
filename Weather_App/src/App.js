
import './App.css'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Filter from './components/Filter'


const App = () =>{
  const [ countries, setCountries ] = useState([])
  const [ filterValue, setFilterValue] = useState('')


  const fetchCountries = () =>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(fetchCountries, [])




  return (
    <div>
      <h1>Weather Of The Capitals</h1>
      <Filter countries={countries} filterValue={filterValue} setFilterValue={setFilterValue}/>
    </div>
  )
}

export default App







