import { useDispatch, useSelector } from "react-redux";
import { TopBar } from "./TopBar";
import { ChatBar } from "./ChatBar";
import { SendingChatBar } from "./SendingChatBar";

export function MessageContainer() {
  const dispatch = useDispatch();
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  // const [friend, setFriend] = useState([]);
  return (
    <div className="relative min-w-[800px]  bg-[#45525f] text-white min-h-[527px] flex flex-col">
      <TopBar />
      <ChatBar />
      <SendingChatBar />
    </div>
  );
}
