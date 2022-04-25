const fs = require("fs");
const dir = fs.readdirSync("./tmp/data").sort().reverse();
const reqFile = (path) => require("./tmp/data/" + path);

let data = reqFile(dir[0]);

function merge(first, second) {
    for(let item of second) {
        let i = first.findIndex(t => t.date === item.date);
        if(i !== -1) {
            first[i].value = Math.max(item.value, first[i].value);
        } else {
            first.push(item);
        }
    }
    return first;
}

for(let file of dir) {
    let current = reqFile(file);
    if(!current.activityHistory[0].size || !current.activityHistory[0].size.length) continue; // JS moment
    let b = data;
    data = current;
    current = b;
    data.activityHistory[0].size = merge(current.activityHistory[0].size, data.activityHistory[0].size);
}

console.log(JSON.stringify(data));