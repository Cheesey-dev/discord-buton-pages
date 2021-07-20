# discord-button-pages
Button pages for the discord-buttons package.

This package allows you to have multiple pages of buttons, and to be able to cycle through them using auto-generated buttons.  

To install the package, use the following command in the console/terminal/shell.

`npm i discord-embeds-pages-buttons`

Here is some example code for using the package:
      
      const Discord = require("discord.js");
      
      const disbut = require("discord-buttons");
      
      const disbutpages = require("discord-button-pages")
      
      const client = new Discord.Client();
      
      disbut(client);
      
      client.login(process.env.token)
      
      client.on("ready", ()=>{
      console.log("I am ready")
      })
      
      client.on("message", async message=>{
      if(message.author.bot || message.channel.type == "dm")return;
      if(message.content == "test"){
        const embed1 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle("1")
        
        const embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("2")
        
        const embed3 = new Discord.MessageEmbed()
        .setColor("PINK")
        .setTitle("3")
        
        var pages = [embed1, embed2, embed3]
        
        disbutpages.pages(client, message, pages, 100000, disbut, "red")
      }
    })

**Functions**

There is one function in this package.

**disbutpages.pages(client, message, pages, timeout, disbut, style)**

**Client:**
Client is your discord client

**Message:**
This is the message that the person sent.

**Pages:**
This is an array of Discord.MessageEmbed()

**Timeout:**
This is the amount of time after the message is sent (in milliseconds) to stop updating the pages.

**Disbut:**
This is the disbut instance that you have.

      const Discord = require("discord.js")

      const client = new Discord.Client()

      const disbut = require("discord-buttons")

      disbut(client)

You would then use the defined disbut.

**Style:**
This is the colour of the page moving buttons.
Can be one of red, green, blurple or grey

# Support

Join the discord for support and for other packages/discord bots:

https://discord.gg/u9gFdnu
