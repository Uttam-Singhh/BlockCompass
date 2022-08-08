const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
var config = {};



try {
    let fileContents = fs.readFileSync('/configuration/blockchain.yaml', 'utf8');
    let data = yaml.load(fileContents);
    if (data.polygon ){
          config.receiver = data.polygon.receivers;
          config.contractAddress = data.polygon.contract.address;
          config.gas = data.polygon.contract.gas;
          config.gasPrice = data.polygon.contract.gasPrice;
          config.contractABI = path.resolve(data.polygon.contract.contractABI);
    }

} catch (e) {
    console.log(e);
}

module.exports = config