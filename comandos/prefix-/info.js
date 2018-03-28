exports.run = (client, message, args) => {   

message.channel.send({"embed": {
        "title": "Clique para ir para o sites.",
        "description": `IP: Betamc.com.br\n\nTwitter: [@BetaServidores](https://twitter.com/BetaServidores)\n\nLoja: [Loja BetaMC](https://loja.betamc.com.br)\n\nSite: [betamc.com.br](https://betamc.com.br)\n\nUsuarios no discord: ${client.users.size -1}`,
        "url": "",
        "color": 4437732,
        "timestamp": new Date(),
        "footer": {
          "icon_url": client.user.avatarURL,
          "text": "ReflexayDev© • BetaBOT"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": "BetaMC » Informações",
          "url": "",
          "icon_url": client.user.avatarURL
        }
      }
      });
      
        }
      
      