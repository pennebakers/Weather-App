import Country from "./Country"

const Countries = ({filterCountries}) => {
    return(
        <div>
        {filterCountries.length > 10 &&
            <h1>too many countries</h1>
        }
        {filterCountries.length < 10 && filterCountries.length > 1 &&
            <h1>less than 10</h1>
        }
        {filterCountries.length === 1 &&
            <Country filterCountries={filterCountries}/>
        }
        {filterCountries.length === 0 &&
            <h1>No Matches Have Been Found </h1>
        }
        </div>
    )
}

export default Countries