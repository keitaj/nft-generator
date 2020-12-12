const MyCollectible = artifacts.require("MyCollectible");

module.exports = async function (deployer) {
  await deployer.deploy(MyCollectible);
};
