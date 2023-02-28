import { useNavigate, useParams } from "react-router-dom";

function Stock({ stocks }) {
    let navigate = useNavigate()
    let { symbol } = useParams()

    function goBack() {
        navigate("/stocks");
    }

    return (
        <div>
            <button onClick={goBack}>Back</button>
            {stocks.filter(stock => stock.symbol === symbol)
            .map(stock => (
                <>
                    <h1>{`${stock.name}  (${stock.symbol})`}</h1>
                    <h2>{`lastPrice:  (${stock.lastPrice})`}</h2>
                    <h2>{`change:  (${stock.change})`}</h2>
                    <h2>{`high:  (${stock.high})`}</h2>
                    <h2>{`low:  (${stock.low})`}</h2>
                    <h2>{`open:  (${stock.open})`}</h2>
                </>
            ))}
        </div>
    )
}

export default Stock;