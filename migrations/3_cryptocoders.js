var CryptoCoders = artifacts.require("./CryptoCoders.sol"); //ctrl+shift+L

module.exports = function(deployer) {
  deployer.deploy(CryptoCoders);
};
