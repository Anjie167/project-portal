import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/login/login_screen"
import ApplicationScreen from './components/application/application_screen';
import PortalScreen from './components/portal/portal_screen';
import SelectPlans from './components/plans/select_plans';
import { application, clientPortal, login, selectPlan } from './utils/routes';


function App() {
  return (
    <div style={{height:"100%"}}>
      <Routes>
        <Route exact path={login} element={<LoginScreen />} style={{width:"100%"}} />
        <Route path={clientPortal} element={<PortalScreen />} />
        <Route path={selectPlan} element={<SelectPlans />} />
        <Route path={application} element={<ApplicationScreen />} />
      </Routes>
    </div>
  );
}

export default App;
