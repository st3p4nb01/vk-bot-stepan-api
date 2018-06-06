var VK = require("VK-Promise"),
    vk = new VK ("78f161bc267bed8fff4244e449cdd08be6368b51f9c41d7efcc3572929dc161f626161c8cd4d2139ae4cc");

var c = require ("./clear.json");
var r = require ("./raid.json");

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
});

// ==================================Команды================================== //

vk.on("message", function (event, msg) {
    if(msg.body == ".clear") {
        msg.send(c.clear)
        msg.send("Очищено &#9989;")
    }

});

vk.on("message", function (event, msg) {
    if(msg.body == ".raid") {
        msg.send("r.msg")
    }
});


