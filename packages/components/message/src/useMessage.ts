import { createApp, ref } from "vue";
import { MessageEX, MessageP } from "./message";
import { uuid } from "@licht-ui/utils/src/uuid";

import messageContainer from "./message-container.vue";
const div = document.createElement("div");
div.classList.add("licht-overlayer");
document.body.appendChild(div);
const messageQueue = ref<MessageEX[]>([]);
createApp(messageContainer, {
	queue: messageQueue,
}).mount(div);

export const remove = (index: number) => {
	messageQueue.value.splice(index, 1);
};

export const message = (prop: MessageP) => {
	const _uuid = uuid();
	let _msg = {
		...prop,
		location: prop.location ? prop.location : "right",
		key: _uuid,
	} as MessageEX;
	messageQueue.value.push(_msg);
};
