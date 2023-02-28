import { Link } from "react-router-dom";
import Stock from "./Stock";

function Dashboard({ stocks }) {
    return (
        <div className="stonks">
            {stocks.map(x => (
                <Link to = {`/stock/${x.symbol}`}>
                    <h2>{`${x.name}   ${x.symbol}`}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Dashboard;