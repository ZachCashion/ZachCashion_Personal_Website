Email.send({
    SecureToken: "36734f33-aa11-4866-9407-d1c4a839bb88",
    To: 'zach.cashion@gmail.com',
    From: "zach.cashion@gmail.com",
    Subject: "Portfolio Contact Form: " + name,
    Body: message + name + email + phone
}).then(
    message => alert(message)
);
