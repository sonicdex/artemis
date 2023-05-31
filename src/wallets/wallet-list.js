import { bitfinity } from './bitfinity';
import { dfinity } from './dfinity';
import { plug } from './plug';
import { stoic } from './stoic';
import { astrox } from './astroxme';
// import { nfid } from './nfid';
export const walletList = [
    { id: 'dfinity', name: "Internet Identity", icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/dfinity.svg', adapter: dfinity },
    { id: 'plug', name: 'Plug Wallet', icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/plug.jpg', adapter: plug },
    { id: 'astrox', name: 'AstroX ME', icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/astroxme.webp', adapter: astrox },
    { id: 'bitfinity', name: 'Bitfinity Wallet', icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/bitfinity.svg', adapter: bitfinity },
    { id: 'stoic', name: 'Stoic Wallet', icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/stoic.png', adapter: stoic },
    // { id: 'nfid', name: 'NFID', icon: 'https://d15bmhsw4m27if.cloudfront.net/artemis/nfid.svg', adapter: nfid },
];