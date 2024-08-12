function sendEmail() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    const webhookClient = new Discord.WebhookClient("");

    const embed = new Discord.MessageEmbed()
        .setAuthor(name + " : " + email)
        .setTitle(subject)
        .setDescription(message)
        .setColor('#0099ff');

    webhookClient.send('New Mail!!', {
        embeds: [embed],
    });
    window.alert("Mail Sent!")  
}