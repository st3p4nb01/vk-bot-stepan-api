var VK = require("VK-Promise"),
    vk = new VK ("5b760ed328410e2494164943bd9e455f2cb92d5744b416d89c0e409f332ed2f03f08b78cb04069837bc0e");

var cmdclear = require ("./clear.json");

console.log("Бот работает •");

vk.longpoll.start();

vk.on("message", function (event, msg) {
    if (msg.body == ".test") { // Проверка бота.
        msg.send("Проверка..")
        msg.send("&#4448;")
        msg.send("Бот работает &#9989;")
    }
    if (msg.body == ".binfo") { // Информация о боте.
        msg.send("[Информация о боте &#129302;]\n\nСоздатель: [id154845243|Степан]\nВерсия бота: node.js 10.2.1")
    }
    if (msg.action == "chat_invite_user") {
        msg.send("Опа, что за фраерок? #ПопугЖиви &#128038;")
    }
    if (msg.action == "chat_invite_user_by_link") {
        msg.send("Опа, что за фраерок? #ПопугЖиви &#128038;")
    }
    if (msg.action == "chat_kick_user") {
        msg.send("Ливнул петушок &#128019; #ПопугЖиви &#128038;")
    }
});

// ==================================Команды================================== //

vk.on("message", function (event, msg) {
    if(msg.body == ".clear") {
        msg.send(cmdclear.clear)
        msg.send("Очищено &#9989;")
    }

});


