// Images

import bitcoin from '../../../../assets/images/crypto-currencies/bitcoin.svg'
import bitcoincash from '../../../../assets/images/crypto-currencies/bitcoincash.svg'
import bitcoinglod from '../../../../assets/images/crypto-currencies/bitcoinglod.svg'
import cardano from '../../../../assets/images/crypto-currencies/cardano.svg'
import dash from '../../../../assets/images/crypto-currencies/dash.svg'
import eos from '../../../../assets/images/crypto-currencies/eos.svg'
import ethereum from '../../../../assets/images/crypto-currencies/ethereum.svg'
import euro from '../../../../assets/images/crypto-currencies/euro.svg'
import icon from '../../../../assets/images/crypto-currencies/icon.svg'
import iota from '../../../../assets/images/crypto-currencies/iota.svg'
import litecoin from '../../../../assets/images/crypto-currencies/litecoin.svg'
import monero from '../../../../assets/images/crypto-currencies/monero.svg'
import nem from '../../../../assets/images/crypto-currencies/nem.svg'
import neo from '../../../../assets/images/crypto-currencies/neo.svg'
import qtum from '../../../../assets/images/crypto-currencies/qtum.svg'
import raiblocks from '../../../../assets/images/crypto-currencies/raiblocks.svg'
import ripple from '../../../../assets/images/crypto-currencies/ripple.svg'
import stellar from '../../../../assets/images/crypto-currencies/stellar.svg'
import tron from '../../../../assets/images/crypto-currencies/tron.svg'

export const Tablebody = [
  { name: 'Bitcoin', icon: bitcoin, price: '$10513.00', percentage: '-7%', class1: 'red', marketcap: '$179,470,305,923', circulatingsupply: '16,819,612', class2: 'BTC', class3: 'success', volume: '$9,578,830,000', cmgr: '8.11% / 57', inflation: '0.36% ', direction: 'up', color: 'success' },
  { name: 'Ethereum', icon: ethereum, price: '$966.61', percentage: '-6%', class1: 'red', marketcap: '$95,270,125,036', circulatingsupply: '97,145,024', class2: 'ETH', class3: 'orange', volume: '$3,466,060,000', cmgr: '22.62% / 29', inflation: '0.64% ', direction: 'up', color: 'success' },
  { name: 'Ripple', icon: ripple, price: '$1.2029', percentage: '-11%', class1: 'red', marketcap: '$47,649,145,657', circulatingsupply: '38,739,144,704', class2: 'XRP', class3: 'blue', volume: '$598,337,000', cmgr: '10.85% / 53', inflation: '0.06%', direction: 'down', color: 'danger' },
  { name: 'Bitcoin Cash', icon: bitcoincash, price: '$1547.00', percentage: '-11%', class1: 'red', marketcap: '$26,720,210,956', circulatingsupply: '16,925,988', class2: 'BCH', class3: 'red', volume: '$598,337,000', cmgr: '21.30% / 6', inflation: '0.32% ', direction: 'up', color: 'success' },
  { name: 'Cardano', icon: cardano, price: '$0.550768', percentage: '-9%', class1: 'red', marketcap: '$14,279,800,786', circulatingsupply: '25,927,069,696', class2: 'ADA', class3: 'warning', volume: '$466,381,000', cmgr: '205.35% / 3', inflation: '0.00% ', direction: 'down', color: 'danger' },
  { name: 'Litecoin', icon: litecoin, price: '$173.86', percentage: '-7%', class1: 'red', marketcap: '$9,670,920,267', circulatingsupply: '54,873,584', class2: 'LTC', class3: 'success', volume: '$430,524,000', cmgr: '6.87% / 57', inflation: '0.80% ', direction: 'up', color: 'success' },
  { name: 'EOS', icon: eos, price: '$13.394', percentage: '5%', class1: 'green', marketcap: '$8,420,143,033', circulatingsupply: '621,412,800', class2: 'EOS', class3: 'secondary', volume: '$2,864,780,000', cmgr: '53.25% / 6', inflation: '11.56%', direction: 'down', color: 'danger' },
  { name: 'NEM', icon: nem, price: '$0.935049', percentage: '-11%', class1: 'red', marketcap: '$8,415,440,999', circulatingsupply: '8,999,999,488', class2: 'XEM', class3: 'orange', volume: '$370,297,000', cmgr: '26.99% / 33', inflation: '0.24%', direction: 'up', color: 'success' },
  { name: 'Stellar', icon: stellar, price: '$0.467813', percentage: '2%', class1: 'green', marketcap: '$8,358,735,080', circulatingsupply: '17,867,683,840', class2: 'XLM', class3: 'info', volume: '$370,297,000', cmgr: '13.12% / 41', inflation: '0.19% ', direction: 'up', color: 'success' },
  { name: 'NEO', icon: neo, price: '$118.61', percentage: '-9%', class1: 'red', marketcap: '$7,693,400,000', circulatingsupply: '65,000,000', class2: 'NEO', class3: 'pink', volume: '$318,308,000', cmgr: '62.68% / 15', inflation: '0.00% ', direction: 'down', color: 'danger' },
  { name: 'IOTA', icon: iota, price: '$2.34', percentage: '-14%', class1: 'red', marketcap: '$6,504,100,862', circulatingsupply: '2,779,530,240', class2: 'MIOTA', class3: 'warning', volume: '$103,132,000', cmgr: '23.27% / 7', inflation: '-0.02%', direction: 'down', color: 'danger' },
  { name: 'Dash', icon: dash, price: '$747.222', percentage: '-8%', class1: 'red', marketcap: '$5,881,413,815', circulatingsupply: '7,833,738', class2: 'DASH', class3: 'danger', volume: '$96,147,900', cmgr: '19.19% / 47', inflation: '0.81% ', direction: 'up', color: 'success' },
  { name: 'Monero', icon: monero, price: '$305.16', percentage: '-11%', class1: 'red', marketcap: '$4,778,157,533', circulatingsupply: '7,833,738', class2: 'XMR', class3: 'success', volume: '$100,788,000', cmgr: '11.88% / 44', inflation: '0.78%', direction: 'up', color: 'success' },
  { name: 'TRON', icon: tron, price: '$0.067691', percentage: '-5%', class1: 'red', marketcap: '$4,450,560,896', circulatingsupply: '7,833,738', class2: 'TRX', class3: 'primary', volume: '$581,651,000', cmgr: '142.69% / 4', inflation: '0.00% ', direction: 'down', color: 'danger' },
  { name: 'Bitcoin Gold', icon: bitcoinglod, price: '$181.39', percentage: '-7%', class1: 'red', marketcap: '$3,084,108,676', circulatingsupply: '16,779,700', class2: 'BTG', class3: 'secondary', volume: '$199,652,000', cmgr: '-25.44% / 3', inflation: '0.34% ', direction: 'down', color: 'danger' }

]

