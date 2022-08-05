import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'


const deployFunction: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  ethers,
}: HardhatRuntimeEnvironment) {
  console.log('Running SwapToken-v3 deploy script')
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()
  console.log('Deployer:', deployer)


  const { address } = await deploy('SwapTokenv3', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    skipIfAlreadyDeployed: false,
    // waitConfirmations: 3,
    args: [],
  })

  console.log('SwapToken-v3 deployed at ', address)

}

export default deployFunction

deployFunction.dependencies = []

deployFunction.tags = ['SwapToken-v3']
