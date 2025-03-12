import { findById } from "../services/api";

function MovieDetail () {
    const id = "67bf4d4f10798b6200cf2d2a"; 
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return (
        <h2>Hello World {}</h2>
    );
}