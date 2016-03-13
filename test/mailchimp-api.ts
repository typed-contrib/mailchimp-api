import * as mc from "mailchimp-api";

const client = new mc.Mailchimp("apikey", true);

client.campaigns.list(
    { limit: 50 }, 
    result => {
        result.data.forEach(campaign => {
            if (campaign.emails_sent) {
                console.log(campaign);
            }
        });
    },
    onError);
    
client.lists.list(
    { limit: 50 },
    result => {
        result.data.forEach(list => {
            client.lists.members(
                { id: list.id }, 
                members => {
                    console.log(list, members.data);
                },
                onError);
        });
    },
    onError);

function onError(err: mc.Mailchimp.RequestError) {
    console.error(`An error with code ${err.code} and status ${err.status} occured`, err);
}