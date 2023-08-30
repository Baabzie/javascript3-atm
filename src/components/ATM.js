import { useState } from "react"

export default function ATM() {

    let currencies = [
        {
            name: "SEK",
            symbol: "kr",
            symbolPlacementAfter: true, 
            dollarValue: 0.092,
            notes: [100, 200, 500],
        },
        {
            name: "EUR",
            symbol: "€",
            symbolPlacementAfter: false, 
            dollarValue: 1.09,
            notes: [10, 20, 50],
        },
        {
            name: "USD",
            symbol: "$",
            symbolPlacementAfter: false, 
            dollarValue: 1,
            notes: [10, 20, 50],
        },
        {
            name: "GBP",
            symbol: "£",
            symbolPlacementAfter: false, 
            dollarValue: 1.26,
            notes: [10, 20, 50],
        },
    ];

    let [currentCurrency, setCurrentCurrency] = useState(currencies[0]);

    return (
        <>
            {currentCurrency.notes.map((note) => {
                return (
                    <button>{!currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>}{note}{currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>}</button>
                )
            })}
            <br/>
            {currencies.map((currency, i) => {
                return (
                    currency.name !== currentCurrency.name && <button onClick={() => {setCurrentCurrency(currencies[i])}}>{currency.name}</button>
                )
            })}
            <p>{currentCurrency.name}</p>
            <p>{currentCurrency.symbol}</p>
        </>
    )
}