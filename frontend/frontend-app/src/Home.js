import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Types from "./Types";
import App from "./App";
import NewUser from "./NewUser";
import AssetTable from "./components/AssetTable";
import EditAsset from "./EditAsset";
function Home() {


  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/create-assets' element={<App/>} />
            <Route path='/create-types' element={<Types/>} />
            <Route path='/' element={<AssetTable/>} />
            <Route path='/assets' element={<AssetTable/>} />
            <Route path='/register-user' element={<NewUser/>} />
            <Route path='/edit-asset/:assetId' element={<EditAsset />} />
        </Routes>

    </div>
  );
}

export default Home;
