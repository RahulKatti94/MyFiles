import { Link, Route, Routes } from "react-router-dom";
import Headphones from "./Headphones";
import Mobiles from "./Mobiles";

const App = () =>{
    return <div>
        <h3>Menu</h3>
        <Link to="/mobiles">mobiles</Link> <br />
        <Link to = "/head-Phones">Head-Phones</Link>
        <Routes>
            <Route path="/mobiles." element ={<Mobiles />}  />
            <Route path="/head-phones." element ={<Headphones />}  />
        </Routes>

    </div>


}

export default App;