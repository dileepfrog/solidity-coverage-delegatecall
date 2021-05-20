contract("TestContract", () => {
  const TestContract = artifacts.require("TestContract");

  describe("test", () => {
    it("should work", async () => {
      const testContract = await TestContract.new();
      console.log(
        await testContract.test(
          1,
          { x: 2 },
          "0x0000",
          "0x0000",
          "0x0000",
          3,
          3,
          "0x0000",
          "0x0000",
          "0x0000",
          4,
          54,
          6
        )
      );
    });
  });
});
