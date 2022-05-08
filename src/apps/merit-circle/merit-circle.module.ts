import { Register } from '~app-toolkit/decorators';

import { AbstractApp } from '~app/app.dynamic-module';

import { MeritCircleContractFactory } from './contracts';
import { EthereumMeritCircleBalanceFetcher } from './ethereum/merit-circle.balance-fetcher';
import { EthereumMeritCircleFarmContractPositionFetcher } from './ethereum/merit-circle.farm.contract-position-fetcher';
import MERIT_CIRCLE_DEFINITION, { MeritCircleAppDefinition } from './merit-circle.definition';

@Register.AppModule({
  appId: MERIT_CIRCLE_DEFINITION.id,
  providers: [
    MeritCircleAppDefinition,
    MeritCircleContractFactory,
    EthereumMeritCircleBalanceFetcher,
    EthereumMeritCircleFarmContractPositionFetcher,
  ],
})
export class MeritCircleAppModule extends AbstractApp() { }
