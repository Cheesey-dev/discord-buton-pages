
exports.pages = async function(client, message, pages, timeout, disbut, style){
    const Discord = require("discord.js");
    require("discord-buttons");
    var timeForStart = Date.now();
    const pageMovingButtons1 = new disbut.MessageButton()
    .setID(`forward_button_embed`)
    .setLabel("İleri")
    .setEmoji("⏩")
    .setStyle(style)
    const pageMovingButtons2 = new disbut.MessageButton()
    .setID(`back_button_embed`)
    .setLabel("Geri")
    .setEmoji("⏪")
    .setStyle(style)
    var pageMovingButtons = new disbut.MessageActionRow()
    .addComponent(pageMovingButtons2)
    .addComponent(pageMovingButtons1)
    var currentPage = 0;
    var m = await message.channel.send({components: [pageMovingButtons], embed: pages[0]});
    client.on("clickButton", async b=>{
        if(Date.now() - timeForStart >= timeout)return;
        if(b.message.id == m.id && b.clicker.user.id == message.author.id){
        if(b.id == "back_button_embed"){
            if(currentPage - 1 < 0){
                currentPage = pages.length - 1
            } else{
                currentPage -= 1;
            }
        } else if(b.id == "forward_button_embed"){
            if(currentPage + 1 == pages.length){
                currentPage = 0;
            } else{
                currentPage += 1;
            }
        }
        if(b.id == "back_button_embed" || b.id == "forward_button_embed"){
            m.edit({embed: pages[currentPage], components: [pageMovingButtons]});
            b.defer(true);
        }
    }
    })
}
