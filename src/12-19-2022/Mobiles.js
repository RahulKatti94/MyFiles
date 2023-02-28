import { Link, Route, Routes } from "react-router-dom";
import SamungMobiles from "./SamungMobiles";

const Mobiles = () =>{
    return (
        <div>
          <h2> Mobiles</h2>
          <Link to="/mobiles/samsung">Samsung</Link>
          <SamungMobiles />
          <Routes>
            <Route path="/samsung" element={<SamungMobiles />} />
          </Routes>
        </div>
      );
}
export default Mobiles;