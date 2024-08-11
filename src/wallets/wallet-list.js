import { bitfinity } from './bitfinity';
import { nns } from './nns';
import { plug } from './plug';
import { stoic } from './stoic';
import { astrox } from './astroxme';
import { nfid } from './nfid';
import { metaMask } from './msq';
import dfinityLogo from '../../assets/dfinity.svg';

const BaseUrl = "https://github.com/microdao-corporation/w98-pnp/main/";

export const walletList = [
    { id: 'nns', name: "Internet Identity", icon: dfinityLogo, adapter: nns },
    // { id: 'plug', name: 'Plug Wallet', icon: BaseUrl + 'assets/plug.jpg', adapter: plug },
    // { id: 'astrox', name: 'AstroX ME', icon: BaseUrl + 'assets/astroxme.webp', adapter: astrox },
    // { id: 'bitfinity', name: 'Bitfinity Wallet', icon: BaseUrl + 'assets/bitfinity.svg', adapter: bitfinity },
    // { id: 'stoic', name: 'Stoic Wallet', icon: BaseUrl + 'assets/stoic.png', adapter: stoic },
    // { id: 'nfid', name: 'NFID', icon: BaseUrl + 'assets/nfid.svg', adapter: nfid },
    // { id: 'metamask', name: 'MetaMask', icon: BaseUrl + 'assets/metamask.svg', adapter: metaMask },
];