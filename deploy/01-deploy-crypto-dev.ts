import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = await hre.deployments;

  await deploy("CryptoDevToken", {
    from: deployer,
    log: true,
    args: [process.env.NFT_ADDRESS],
  });
};

export default func;
func.tags = ["all", "crypto-dev-token"];
