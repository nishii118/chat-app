import { useDispatch } from "react-redux";
import { logOut } from "../../store/userSlicer";
import { SearchBar } from "./SearchBar";
import { Conversations } from "./Conversations";

export function LeftSideBar() {
  const dispatch = useDispatch();
  return (
    <div className="flex p-5 flex-col gap-5 overflow-auto bg-[#a4a8c8]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl">Chats</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            // console.log("log out");
            dispatch(logOut());
            // console.log("after logout");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </div>
      <SearchBar/>
      <Conversations/>
    </div>
  );
}
