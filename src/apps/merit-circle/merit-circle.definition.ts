import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const MERIT_CIRCLE_DEFINITION = appDefinition({
  id: 'merit-circle',
  name: 'merit-circle',
  description: 'Adapter for Merit Circle staking contracts',
  url: 'https://staking.meritcircle.io',
  groups: {
    farm: { id: 'farm', type: GroupType.POSITION }
  },
  tags: [AppTag.FARMING, AppTag.GAMING, AppTag.STAKING],
  keywords: [],
  links: {
    learn: 'https://meritcircle.gitbook.io/merit-circle/',
    github: 'https://github.com/Merit-Circle',
    twitter: 'https://mobile.twitter.com/meritcircle_io',
    telegram: 'https://t.me/meritcircle',
    discord: 'https://discord.com/invite/meritcircle',
    medium: 'https://medium.com/@meritcircle',
  },
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
  primaryColor: '#ec8741',
});

@Register.AppDefinition(MERIT_CIRCLE_DEFINITION.id)
export class MeritCircleAppDefinition extends AppDefinition {
  constructor() {
    super(MERIT_CIRCLE_DEFINITION);
  }
}

export default MERIT_CIRCLE_DEFINITION;
