import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../store/messageSlicer";
// import { set } from "mongoose";
import { conversationActions } from "../../store/conversationSlicer";
export function Conversation({ img, name, id }) {
  const dispatch = useDispatch();

  // const messages = useSelector((state) => state.message.messages);
  return (
    <div
      className="flex flex-row flex-start gap-3 items-center border p-3"
      onClick={() => {
        console.log(id);
        dispatch(getMessages(id));
        dispatch(conversationActions.setChatFriend(id));
      }}
    >
      <img src={img} alt="avatar" className="rounded-full h-14 w-14" />
      <h1 className="font-bold text-xl text-white">{name}</h1>
    </div>
  );
}
