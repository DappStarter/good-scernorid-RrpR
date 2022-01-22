require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot curtain razor situate social include enroll army gaze'; 
let testAccounts = [
"0x6268009c5a662dee30dce351cf3194c4a063e0004cade86e3b304bb6af9e917f",
"0x2fd1b3226571ce374756edcbbc1fe44cf47f08d141468f42b0674bea9b69e6e4",
"0x10221fdaaba2856462f8b123da3760e5d8905f0f60c7a674bc37d57ad4b822dd",
"0x3bfe7ea036d17267bf4c818963d28f1b20537985b84f83e1ea5ccc06f4020d4c",
"0xabe1c70c5275f7a51a3e6e99d2bb483b20d75fb159a88e2dba60ab6e0e190a97",
"0x650965c2aefe55bf654fd1af950380a58faf133ab90496ec7debf534ff73c6e0",
"0x5c93bfc5cb4559ce8a321e2e41549927c64bd9dcae5de09718d2bcca643c7d7f",
"0x6e56462e1cd9cd419c1a1e9288f5479654f45e677ce4a37636d0f46e5b7c36b7",
"0x9e6314a9e8e3f66c35131415d39b4c2945b0b9229e65fc771e8393896dc06a80",
"0xdcb164989bd4d0a5d594b3882c45c542db0b0794e1e35441e015c31197537256"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


