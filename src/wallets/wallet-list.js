import { bitfinity } from './bitfinity';
import { dfinity } from './dfinity';
import { plug } from './plug';
import { stoic } from './stoic';
import { astrox } from './astroxme';
import { nfid } from './nfid';
import { metaMask } from './msq';

const BaseUrl = "https://raw.githubusercontent.com/sonicdex/artemis/main/";

export const walletList = [
    { id: 'dfinity', name: "Internet Identity", icon: BaseUrl + 'assets/dfinity.svg', adapter: dfinity },
    { id: 'plug', name: 'Plug Wallet', icon: BaseUrl + 'assets/plug.jpg', adapter: plug },
    { id: 'astrox', name: 'AstroX ME', icon: BaseUrl + 'assets/astroxme.webp', adapter: astrox },
    { id: 'bitfinity', name: 'Bitfinity Wallet', icon: BaseUrl + 'assets/bitfinity.svg', adapter: bitfinity },
    { id: 'stoic', name: 'Stoic Wallet', icon: BaseUrl + 'assets/stoic.png', adapter: stoic },
    { id: 'nfid', name: 'NFID', icon: BaseUrl + 'assets/nfid.svg', adapter: nfid },
    { id: 'metamask', name: 'MetaMask', icon: BaseUrl + 'assets/metamask.svg', adapter: metaMask },
];