import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/messageSlicer";
import { useState } from "react";
export function SendingChatBar() {
  const chatFriend = useSelector((state) => state.conversation.chatFriend);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  return (
    <div className=" bottom-0 p-5 border w-full flex flex-row  items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <input
        type="text"
        placeholder="Type a message..."
        className="grow p-[5px] rounded-lg border-none bg-gray-800 mx-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
        onClick={() => {
          console.log("clicked");
          if (chatFriend._id !== undefined && message !== "") {
            // console.log(chatFriend._id);
            // console.log(message);
            dispatch(sendMessage({conversationId: chatFriend._id, message: message}));
            setMessage("");
          }
          
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
    </div>
  );
}
