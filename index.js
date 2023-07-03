export const handler = async(event) => {
    // TODO implement
    const   accountSid = 'ACa17cb0b734d5f7c4edc66c9c1b9e9085',
            authToken = 'b2c842d486d7e1ef42292a3b4d1b0985',
            client = require('twilio')(accountSid, authToken)

    let desc =  JSON.parse(body.event.alertConditionDescription),
        alertId = JSON.parse(body.event.alertConditionId),
        details = JSON.parse(body.event.details)
            
    client.messages
    .create({
        body: `Se detectó la sigiente acción: ${details} // Con la alerta: ${alertId}`,
        from: '+14849396803',
        to: '+525579416493'
    })
    .then(message => console.log(message.sid))
    .done(() => {
        const response = {
            statusCode: 200,
            body: "Ok"
        };
        console.log(JSON.paerse(body));
        
    });

    return response;
};
