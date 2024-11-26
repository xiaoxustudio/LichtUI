import { createApp, ref } from "vue";
import { MessageEX, MessageP } from "./message";
import { uuid } from "@licht-ui/utils/src/uuid";
import messageContainer from "./message-container.vue";

const messageQueueLeft = ref<MessageEX[]>([]);
const messageQueueCenter = ref<MessageEX[]>([]);
const messageQueueRight = ref<MessageEX[]>([]);
const initVal = ref(false);

const init = () => {
	const div = document.createElement("div");
	div.classList.add("licht-overlayer");
	document.body.appendChild(div);
	createApp(messageContainer, {
		queueLeft: messageQueueLeft,
		queueCenter: messageQueueCenter,
		queueRight: messageQueueRight,
	}).mount(div);
	initVal.value = true;
};

export const removeLeft = (index: number) => {
	messageQueueLeft.value.splice(index, 1);
};
export const removeCenter = (index: number) => {
	messageQueueCenter.value.splice(index, 1);
};
export const removeRight = (index: number) => {
	messageQueueRight.value.splice(index, 1);
};

export const message = (prop: MessageP) => {
	!initVal.value && init();
	const _uuid = uuid();
	const location = prop.location ? prop.location : "right";
	let _msg = {
		...prop,
		key: _uuid,
		uuid: _uuid,
		render: false,
		_close: false,
		location,
	} as MessageEX;
	switch (location) {
		case "center":
			messageQueueCenter.value.push(_msg);
			break;
		case "left":
			messageQueueLeft.value.push(_msg);
			break;
		case "right":
			messageQueueRight.value.push(_msg);
			break;
	}
};
