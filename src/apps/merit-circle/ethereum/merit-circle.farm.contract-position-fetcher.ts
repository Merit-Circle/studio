import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { MeritCircleContractFactory } from '../contracts';
import { MERIT_CIRCLE_DEFINITION } from '../merit-circle.definition';

const appId = MERIT_CIRCLE_DEFINITION.id;
const groupId = MERIT_CIRCLE_DEFINITION.groups.farm.id;
const network = Network.ETHEREUM_MAINNET;

const pools = {
  "0x5c76aD4764A4607cD57644faA937A8cA16729e39": {
    name: "MC Singlesided Staking"
  },
  "0x44c01e5e4216f3162538914d9c7f5E6A0d87820e": {
    name: "MC/ETH Uniswap LP"
  },
  "0xfEEA44bc2161F2Fe11D55E557ae4Ec855e2D1168": {
    name: "MC Escrowed Rewards"
  }
}

@Register.ContractPositionFetcher({ appId, groupId, network })
export class EthereumMeritCircleFarmContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(MeritCircleContractFactory) private readonly meritCircleContractFactory: MeritCircleContractFactory,
  ) { }

  async getPositions() {



    return [];
  }
}
