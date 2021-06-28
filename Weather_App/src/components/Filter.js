
import Countries from './Countries'
const Filter = (props) => {
    
   const handleFilterValue = (event) => {
        props.setFilterValue(event.target.value)
    }
    
    const filterCountries = props.countries.filter(country => country.name.toLowerCase().match(props.filterValue.toLowerCase()))

    

    return(
        <div>
            Country <input value={props.filterValue} onChange={handleFilterValue}/>
            <Countries filterCountries={filterCountries}/>
        </div>
    )
}

export default Filter