import { useState, useEffect } from "react";

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
    let [withdrawAmount, setWithdrawAmount] = useState(0);
    let [balance, setBalance] = useState(0);

    useEffect(() => {
        console.log("Booting up ATM...ATM is ready!")
        return () => {
            (console.log("ATM shutting down…"))
        }
    }, [])

    useEffect(() => {
        console.log("Current amount: " + balance/currentCurrency.dollarValue + " " + currentCurrency.name)
    }, [balance])

    return (
        <>
            <h2>Your balance: {!currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} {Math.round((balance/currentCurrency.dollarValue)*100)/100} {currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} </h2>
            <input type="number" id="depositInput"></input>
            <br/>
            <button onClick={() => {
                setBalance((prevState) => prevState + (document.getElementById("depositInput").valueAsNumber)*currentCurrency.dollarValue)
            }}>Deposit {currentCurrency.name}</button>

            <h2>
                Withdraw: {!currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} {/* If the symbol of the currency is suppose to be showed before the amount (Example: $50) */}
                {withdrawAmount} {/* Amount to be withdrawned */}
                {currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} {/* If the symbol of the currency is suppose to be showed after the amount (Example: 500kr) */}
            </h2>
            
            {currentCurrency.notes.map((note) => {
                return (
                    <button onClick={() => {
                        setWithdrawAmount((prevState) => prevState + note)}}>
                        {!currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} {/* If the symbol of the currency is suppose to be showed before the amount (Example: $50) */}
                        {note} {/* Value on button to be added to "withdrawAmount" */}
                        {currentCurrency.symbolPlacementAfter && <>{currentCurrency.symbol}</>} {/* If the symbol of the currency is suppose to be showed after the amount (Example: 500kr) */}
                    </button>
                )
            })}
            <br/>
            <button disabled={withdrawAmount === 0} onClick={() => { setWithdrawAmount(0);
            {withdrawAmount*currentCurrency.dollarValue < balance ? setBalance((prevState) => prevState - withdrawAmount*currentCurrency.dollarValue) : console.log("Not enough balance on account.")}}}>
                Withdraw Money</button>
            <br/>
            {currencies.map((currency, i) => {
                return (
                    <button disabled={currency.name === currentCurrency.name} onClick={() => {
                        setCurrentCurrency(currencies[i]); /* Change active currency to the one of the button */
                        console.log("Chosen corrency: " + currencies[i].name)
                        setWithdrawAmount(0)}}> {/* Set "withdrawAmount" to 0. */}
                        {currency.name}
                    </button>
                )
            })}
        </>
    )
}