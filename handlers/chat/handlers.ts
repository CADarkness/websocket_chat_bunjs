import { ServerWebSocket } from "bun"
import { WebSocketServerProps, send_message_payload } from "../../type"
import { sender, broadcast } from "../../utils/socket.sender"
import events from "../../constants/events"
export function sendMessage(ws: ServerWebSocket<WebSocketServerProps>, data: send_message_payload) {
    try {
        console.log(`event: send_message`)
        broadcast(ws, { to: data.roomId, action: events.send_message, data: data.messageObject, self: true })
    } catch(error: any) {
        return ws.send(sender(events.error, error.message))
    }
}