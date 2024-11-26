import { useState } from "react"
import Select from "./select.jsx"
import { array } from "./data.js"

const QuoteGenerator = () => {

const random = () => {
   const a = Math.floor(Math.random() * array.length)
    return array[a]
}

    const [quotes, setQuotes] = useState(random())


    const rq = () => {
        const newQuote = random()
        console.log(random());
        setQuotes(
            newQuote
        )
    }
   


    return (
        <>
        <Select/>
        <p>{quotes.quote}</p>
        <p>{quotes.author}</p>
        <button onClick={rq}>Generate Quotes</button>
        </>
    )
}

export default QuoteGenerator