/* eslint-disable react/prop-types */
// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow projectId={import.meta.env.VITE_REACT_PROJECT_ID} username={props.user.username} secret={props.user.secret} style={{height: "100%"}}/>
    </div>
  )
}

export default ChatsPage