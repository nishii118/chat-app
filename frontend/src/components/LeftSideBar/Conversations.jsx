import { useDispatch, useSelector } from "react-redux"
import { getConversation } from "../../store/conversationSlicer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export function Conversations() {
  const dispatch = useDispatch();
  // console.log(Cookies);
  // const[conversations, setConversations] = useState([]);
  useEffect(() => {
    // const getConversations = async () => {
		// 	try {
		// 		const res = await fetch("/api/users");
		// 		const data = await res.json();
		// 		if (data.error) {
		// 			throw new Error(data.error);
		// 		}
		// 		setConversations(data);
		// 	} catch (error) {
		// 		console.log(error.message)
		// 	} 

		// };

		// getConversations();
    console.log(document.cookie);
    console.log(Cookies.get()); // logs all cookies
    // or
    console.log(Cookies.get('jwt'));
    dispatch(getConversation());
  }, [])
  // dispatch(getConversation());
  const conversations = useSelector((state) => state.conversation.conversations);
  console.log(conversations);
  
  return (
    <div className="flex flex-col ">Conversations</div>
  )
}