import { useSelector } from "react-redux";
export function ChatBar() {
  const messages = useSelector((state) => state.message.messages);
  const chatFriend = useSelector((state) => state.conversation.chatFriend);
  const user = useSelector((state) => state.user.user);
  console.log(messages);
  return (
    <div className="overflow-auto px-2 flex flex-col ">
      {messages.map((message, index) => {
        if (message.senderId === user._id) {
          return (
            <div key={index} className="flex justify-end flex-row items-center">
              <div className="bg-[#00a8ff] text-white p-2 rounded-lg m-1">
                {message.message}
              </div>
              <img
                src={user.profilePicture}
                alt="avatar"
                className="rounded-full h-8 w-8"
              />
            </div>
          );
        } else {
          return (
            <div key={index} className="flex justify-start items-center">
              <img
                src={chatFriend.profilePicture}
                alt="avatar"
                className="rounded-full h-8 w-8"
              />
              <div className="bg-[#2f3640] text-white p-2 rounded-lg m-1">
                {message.message}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
