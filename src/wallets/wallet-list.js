import { plug } from './plug';
import { stoic } from './stoic';
import { bitfinity } from './bitfinity';
import { dfinity } from './dfinity';

const wallets = { plug, stoic, bitfinity, dfinity };

export const walletList = [
    { id: 'dfinity', name: "Internet Identity", icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/dfinity.svg', adapter: wallets.dfinity },
    { id: 'astroxme', name: 'AstroX ME', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/astroxme.svg', adapter: false },
    { id: 'bitfinity', name: 'Bitfinity Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/bitfinity.svg', adapter: wallets.bitfinity },
    { id: 'plug', name: 'Plug Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/plug.jpg', adapter: wallets.plug },
    { id: 'stoic', name: 'Stoic Wallet', icon: 'https://raw.githubusercontent.com/sonicdex/artemis/main/assets/stoic.png', adapter: wallets.stoic },
];