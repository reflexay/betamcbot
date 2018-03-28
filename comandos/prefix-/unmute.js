exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["👤 Staff"].includes(r.name)) ) 
  return message.reply("Desculpe, sem permissão");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !unmute (@user) (motivo)");

  member.guild.members.get(member.id).removeRole(member.guild.roles.find("name", "👾 Mutado").id);
message.delete().catch(O_o=>{});
  client.guilds.get("413826223605547020").channels.get("428370524352282626").send({"embed": {
      "title": "BetaMC » Punição",
      "description": "Um usuario foi desmutado.",
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
          "name": "Usuario desmutado",
          "value": `${member.user}`
        },
        {
          "name": "Autor do unmute",
          "value": `${message.author}`,
          "inline": true
        }
      ]
    }
  });

}
