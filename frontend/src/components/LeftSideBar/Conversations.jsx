import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../store/conversationSlicer";
import { useEffect } from "react";
// import Cookies from "js-cookie";
import { Conversation } from "./Conversation";
export function Conversations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConversation());
  }, []);
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  console.log(conversations);

  return (
    <div className="flex flex-col gap-3 overflow-auto">
      {conversations.map((conversation) => {
        return (
          <Conversation
            img={conversation.profilePicture}
            name={conversation.fullName}
            id = {conversation._id}
          />
        );
      })}
    </div>
  );
}
