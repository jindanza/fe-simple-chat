import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const chatProps = useMultiChatLogic(import.meta.env.VITE_REACT_PROJECT_ID, props.user.username, props.user.secret);
  return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )
}

export default ChatsPage