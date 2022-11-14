import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Agr from "./components/Agr";
import Agr2 from "./components/Agr2";
import AgrForm from "./components/Agr_form";
import AreaFeedback from "./components/AreaFeedback";
import AreaFeedChart from "./components/AreaFeedChart";
import AreaFeedList from "./components/AreaFeedList";
import CollectorProfile from "./components/Collector_profile";
import CommonDash from "./components/CommonDash";
import LabourReg from "./components/LabourReg";
import LabourReg2 from "./components/LabourReg2";
import Leave from "./components/Leave";
import MS from "./components/MS";
import SelectPlace from "./components/SelectPlace";
import UpdateProfile from "./components/UpdateProfile";
import Vcm01 from "./components/Vcm01";
import Vcm02 from "./components/Vcm02";
import Vcm03 from "./components/Vcm03";
import Vcm04 from "./components/Vcm04";
import ViewStatus from "./components/ViewStatus";
import Vs01 from "./components/Vs01";
import Vs02 from "./components/Vs02";
import Vs03 from "./components/Vs03";
import Vs04 from "./components/Vs04";
import WeatherForacst from "./components/weatherForacst";
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import VsEvent from './components/Vs-event';
import VsAdditonal from './components/Vs-additional';


function App() {

  return (
    <div className="App h-100">
      <Routes>
        <Route path="/" element={<Navigate replace to="/admin/frame1" />} />
        <Route path="/admin" element={<Dashboard />} >
          <Route path={`frame1`} element={<SelectPlace />} />
          <Route path="frame2" element={< CommonDash />} />
          <Route path="schedule/frame3" element={< Vcm03 />} />
          <Route path="schedule/frame4" element={<Agr />} />
          <Route path="schedule/frame5" element={< WeatherForacst />} />
          <Route path="schedule/frame6" element={<MS />} />
          <Route path="schedule/frame7" element={<Vs01 />} />
          <Route path="schedule/frame8" element={<Vs02 />} />
          <Route path="schedule/frame9" element={<Vs03 />} />
          <Route path="schedule/frame10" element={<Vs04 />} />
          <Route path="schedule/frame11" element={< Vcm04 />} />
          <Route path="schedule/frame12" element={<Vcm02 />} />
          <Route path="schedule/frame13" element={<Vcm01 />} />
          <Route path="schedule/frame14" element={<Agr2 />} />
          <Route path="schedule/frame15" element={<Leave />} />
          <Route path="ad/frame16" element={<LabourReg />} />
          <Route path="ad/frame17" element={<LabourReg2 />} />
          <Route path="ad/frame18" element={<AreaFeedback />} />
          <Route path="ad/frame19" element={<AgrForm />} />
          <Route path="ad/frame20" element={<AreaFeedList />} />
          <Route path="ad/frame21" element={<AreaFeedChart />} />
          <Route path="schedule/frameevent" element={<VsEvent />} />
          <Route path="schedule/frameaditional" element={<VsAdditonal />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
