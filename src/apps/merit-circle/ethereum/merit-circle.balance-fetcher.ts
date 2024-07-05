import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { MERIT_CIRCLE_DEFINITION } from '../merit-circle.definition';

const network = Network.ETHEREUM_MAINNET;

@Register.BalanceFetcher(MERIT_CIRCLE_DEFINITION.id, network)
export class EthereumMeritCircleBalanceFetcher implements BalanceFetcher {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getBalances(address: string) {
    return presentBalanceFetcherResponse([]);
  }
}