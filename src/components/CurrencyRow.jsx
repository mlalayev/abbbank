import React from 'react'
import '../stylingcss/CurrencyRow.css'

function CurrencyRow(props) {

  const {
    currencyOption,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props

  return (
    <div className='currrow'>

      <input type="number" id='inputnrnrnr' placeholder='Satıram' className='fifthsecinput' value={amount}  onChange={onChangeAmount} />

      <select value={selectedCurrency} onChange={onChangeCurrency}>

        {currencyOption.map(option => (
          
          <option key={option} value={option}>{option}</option>
        
        ))}


      </select>

    </div>
  )
}

export default CurrencyRow