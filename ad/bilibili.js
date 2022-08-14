console.log("filter bilibili ad video");
const body =  {...JSON.parse($response.body)};
body.data.items = body.data.items.filter(item => !item.card_goto.startsWith("ad"));
$done({body:JSON.stringify(body)});
