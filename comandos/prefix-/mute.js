exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["👤 Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !mute (@user) (motivo)");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o mute");

  member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "👾 Mutado").id);
message.delete().catch(O_o=>{});
  client.guilds.get("413826223605547020").channels.get("428370524352282626").send({"embed": {
      "title": "BetaMC » Punição",
      "description": "Um usuario foi punido.",
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
        "name": "BetaMC » Punições",
        "url": "",
        "icon_url": client.user.avatarURL
      },
      "fields": [
  
        {
          "name": "Usuario punido",
          "value": `${member.user}`
        },
        {
          "name": "Motivo",
          "value": `${reason}`
        },
        {
          "name": "Punição",
          "value": "Mute",
          "inline": true
        },
        {
          "name": "Autor da punição",
          "value": `${message.author}`,
          "inline": true
        }
      ]
    }
  });

}
