import { MessageContainer } from "../../components/Conversations/MessageContainer.jsx";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar.jsx";
// import { SideBar } from "../../components/sidebar/SideBar.jsx";
export function Home() {
  return (
    <div className="  flex flex-row h-[650px]  justify-center bg-[#45525f]">
      <LeftSideBar/>
      <MessageContainer/>
    </div>
  );
}
