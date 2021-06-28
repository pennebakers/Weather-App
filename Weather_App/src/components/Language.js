const Language = ({ filterCountries }) => {
    return(
        <ul>
        {filterCountries[0].languages && filterCountries[0].languages.map(language => 
            <li key={language.name}>{language.name}</li>    
        )}
        </ul>
    
    )
}

export default Language