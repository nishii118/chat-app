import { useSelector } from "react-redux";
export function TopBar() {
  const chatFriend = useSelector((state) => state.conversation.chatFriend);
  return (
    <div className="flex flex-start p-5 flex-row items-center border">
      <img
        src={chatFriend.profilePicture}
        alt="avatar"
        className="rounded-full h-12 w-12"
      />
      <h1 className="text-xl">{chatFriend.fullName}</h1>
    </div>
  );
}
