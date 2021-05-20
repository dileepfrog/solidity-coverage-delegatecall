const TestContract = artifacts.require("TestContract");
const TestLibrary = artifacts.require("TestLibrary");

module.exports = function (deployer) {
  deployer.deploy(TestLibrary);
  deployer.link(TestLibrary, TestContract);
};
