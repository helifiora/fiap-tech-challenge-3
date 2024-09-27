import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { AppMain } from "./components/AppMain";

export default function App() {
  return (
    <>
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
    </>
  );
}
