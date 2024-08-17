// Path: src/wallets/index.js

import { bitfinity } from './bitfinity';
import { nns } from './nns';
import { plug } from './plug';
import { stoic } from './stoic';
import { astrox } from './astroxme';
import { nfid } from './nfid';
import { metaMask } from './msq';

// Import logos
import dfinityLogo from '../assets/dfinity.svg';
import nfidLogo from '../assets/nfid.svg';
import stoicLogo from '../assets/stoic.png';
import plugLogo from '../assets/plug.jpg';
import astroxLogo from '../assets/astroxme.webp';
import bitfinityLogo from '../assets/bitfinity.svg';
import metamaskLogo from '../assets/metamask.svg';

export const walletList = [
    { id: 'nns', name: "Internet Identity", icon: dfinityLogo, adapter: nns },
    // { id: 'plug', name: 'Plug Wallet', icon: plugLogo, adapter: plug },
    // { id: 'astrox', name: 'AstroX ME', icon: astroxLogo, adapter: astrox },
    // { id: 'bitfinity', name: 'Bitfinity Wallet', icon: bitfinityLogo, adapter: bitfinity },
    // { id: 'stoic', name: 'Stoic Wallet', icon: stoicLogo, adapter: stoic },
    { id: 'nfid', name: 'NFID', icon: nfidLogo, adapter: nfid },
    // { id: 'metamask', name: 'MetaMask', icon: metamaskLogo, adapter: metaMask },
];

// Export individual wallet modules
export * from './plug';
export * from './stoic';
export * from './bitfinity';
export * from './nns';
export * from './astroxme';
export * from './nfid';
export * from './msq';
