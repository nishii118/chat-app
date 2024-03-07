import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar.jsx";
// import { SideBar } from "../../components/sidebar/SideBar.jsx";
export function Home() {
  return (
    <div className="flex py-10 px-20 flex-row items-center justify-center h-screen bg-slate-400">
      <LeftSideBar/>
    </div>
  );
}
