import { Outlet } from "react-router-dom";
import RootHeader from "./RootHeader";
import { RootMain } from "./RootMain";

export default function RootLayout() {
  return (
    <>
      <RootHeader />
      <RootMain>
        <Outlet />
      </RootMain>
    </>
  );
}
