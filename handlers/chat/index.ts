import { ServerWebSocket } from "bun"
import { WebSocketServerProps, send_message_payload } from "../../type"
import { sendMessage } from "./handlers"
import events from "../../constants/events"

export default function chatHandler(ws: ServerWebSocket<WebSocketServerProps>, action: string, data: Object) {
    switch (action) {
        case events.send_message:
            sendMessage(ws, data as send_message_payload)
            break
    }
}