import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country, capital: 'New Delhi'}

  onChangingCapital = event => {
    const countryList = countryAndCapitalsList.filter(
      eachItem =>
        eachItem.id.toLowerCase() === event.target.value.toLowerCase(),
    )

    this.setState(() => ({
      country: countryList[0].country,
      capital: countryList[0].id,
    }))
  }

  render() {
    const {country, capital} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              name="capitals"
              id="capitals"
              onChange={this.onChangingCapital}
              value={capital}
            >
              {countryAndCapitalsList.map(item => (
                <option value={item.id} key={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals"> is Capital of which country?</label>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
