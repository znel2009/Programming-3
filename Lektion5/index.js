function main() {
    const socket = io();
    const chatDiv = document.getElementById('chat');
    let input = document.getElementById('input_message');
    let button = document.getElementById('send_btn');

    function handleSubmit(evt) {
        let val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        let p = document.createElement('p');
        p.innerText = msg;
        p.classList.add('chat_p');
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
} // main closing bracket
window.onload = main;