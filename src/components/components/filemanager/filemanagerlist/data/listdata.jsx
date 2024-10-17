/* eslint-disable react/react-in-jsx-scope */
export const List1 = [
  { icon: 'time', title: 'Recent', active: 'active' },
  { icon: 'heart', title: 'Favourites', active: '' },
  { icon: 'eye', title: 'Hidden Files', active: '' },
  { icon: 'send-plane-2', title: 'Transfer files', active: '' },
  { icon: 'drive', title: 'Google Drive', active: '' },
  { icon: 'tv-2', title: 'FTP', active: '' },
  { icon: 'lock', title: 'Private Files', active: '' },
  { icon: 'shield-check', title: 'Deep Blean', active: '' },
  { icon: 'delete-bin-5', title: 'Trash Bin', active: '' },
  { icon: 'microsoft', title: 'More', active: '' }
]

const svg1 = <svg className="file-manager-icon w-icn me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
<path fill="#c8e4a6"
  d="M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z" />
<path fill="#add679"
  d="M19,2H5C3.34515,2.00483,2.00483,3.34515,2,5v8.86l3.88-3.88c1.18747-1.13,3.05253-1.13,4.24,0l2.87139,2.887l0.88752-0.88751c1.17344-1.16662,3.06874-1.16662,4.24218,0L22,15.8584V5C21.99517,3.34515,20.65485,2.00483,19,2z M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z" />
<path fill="#77bc21"
  d="M10.12,9.98c-1.18747-1.13-3.05253-1.13-4.24,0L2,13.86V19c0.00484,1.65484,1.34516,2.99516,3,3h14c0.81512-0.00034,1.59497-0.3325,2.16-0.92L10.12,9.98z" />
<path fill="#c8e4a6"
  d="M22,15.8584l-3.87891-3.87891c-1.17345-1.1666-3.06873-1.1666-4.24218,0L12.99139,12.867l8.16425,8.20856C21.69776,20.5208,22.00089,19.77567,22,19V15.8584z" />
</svg>

const svg2 = <svg className="file-manager-icon w-icn me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
<path fill="#f2c8db"
  d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z" />
<path fill="#eaa4c4"
  d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z" />
</svg>

const svg3 = <svg className="file-manager-icon w-icn me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
 <path fill="#b6dfff"
   d="M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" />
 <path fill="#86cbff"
   d="M20 8.99969H15a2 2 0 0 1-2-2v-5zM19 22a.99974.99974 0 0 1-1-1V19a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 19 22zM19 17a1.03391 1.03391 0 0 1-.71-.29.99108.99108 0 0 1-.21045-1.08984A1.14883 1.14883 0 0 1 18.29 15.29a1.02673 1.02673 0 0 1 .32959-.21.91433.91433 0 0 1 .76025 0 1.03418 1.03418 0 0 1 .33008.21 1.15772 1.15772 0 0 1 .21.33008A.98919.98919 0 0 1 19.71 16.71a1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 19 17zM15 18H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 14H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM10 10H9A1 1 0 0 1 9 8h1a1 1 0 0 1 0 2z" />
</svg>

const svg4 = <svg className="file-manager-icon w-icn me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="#efc956"
  d="M21.65137,2.24121a1.00561,1.00561,0,0,0-.80323-.22949l-13,2A1.00054,1.00054,0,0,0,7,5V15.35107A3.45946,3.45946,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.85779L20,9.16553v4.18554A3.45946,3.45946,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A.99909.99909,0,0,0,21.65137,2.24121Z" />
</svg>

const svg5 = <svg className="file-manager-icon w-icn me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
<path fill="#fdc79a"
  d="M16,10H8c-2.20917,0-4-1.79083-4-4v6c0.0022,2.20825,1.79175,3.9978,4,4h8c2.20825-0.0022,3.9978-1.79175,4-4V6C20,8.20917,18.20917,10,16,10z" />
<path fill="#fdab67"
  d="M16,16H8c-2.20825-0.0022-3.9978-1.79175-4-4v6c0.0022,2.20825,1.79175,3.9978,4,4h8c2.20825-0.0022,3.9978-1.79175,4-4v-6C19.9978,14.20825,18.20825,15.9978,16,16z" />
<polygon fill="#fdc79a" points="20 5.998 20 6 20 5.999" />
<path fill="#fdab67"
  d="M16,10H8c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4h8c2.20914,0,4,1.79086,4,4S18.20914,10,16,10z" />
<circle cx="8" cy="13" r="1" fill="#fc7303" />
<circle cx="8" cy="19" r="1" fill="#fc7303" />
</svg>
const svg6 = <svg className="file-manager-icon w-icn me-2"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="#a6b2ed"
  d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" />
<path fill="#6b80e2"
  d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-5a1 1 0 1 1 2 0v5A.99943.99943 0 0 1 12 18.00031z" />
<path fill="#6b80e2"
  d="M12,18.00031a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,1,1,10.707,14.29328L12,15.58625l1.293-1.293A.99989.99989,0,1,1,14.707,15.70734l-2,2A.99676.99676,0,0,1,12,18.00031Z" />
</svg>

const svg7 = <svg className="file-manager-icon w-icn me-2"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="#fdb172"
  d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z" />
<path fill="#fd7e14"
  d="M12,16.24219a.99676.99676,0,0,1-.707-.293L8.46484,13.12109a3.00244,3.00244,0,0,1,0-4.24218A3.06772,3.06772,0,0,1,12,8.35254a3.0699,3.0699,0,0,1,3.53613.52637,3.00332,3.00332,0,0,1-.001,4.24218L12.707,15.94922A.99676.99676,0,0,1,12,16.24219Z" />
</svg>

const svg8 = <svg className="file-manager-icon w-icn me-2"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<rect width="9" height="9" x="2" y="2" fill="#e6647f"
  rx="1" />
<rect width="9" height="9" x="2" y="13" fill="#f0a2b2"
  rx="1" />
<rect width="9" height="9" x="13" y="2" fill="#f0a2b2"
  rx="1" />
<rect width="9" height="9" x="13" y="13" fill="#f0a2b2"
  rx="1" />
</svg>

export const Svgdata = [
  { title: 'Image', text: '14.2mb', icon: svg1 },
  { title: 'Video', text: '212mb', icon: svg2 },
  { title: 'Docs', text: '34.mb', icon: svg3 },
  { title: 'Music', text: '1.5gb', icon: svg4 },
  { title: 'APK', text: '50mb', icon: svg5 },
  { title: 'Download', text: '10.8mb', icon: svg6 },
  { title: 'Chat', text: '1.5gb', icon: svg7 },
  { title: 'More', text: '16gb', icon: svg8 }
]
export const Recenttable = [
  { icon: svg3, name: 'noa documentation', date: '07/10/21, 03:30', type: 'doc', size: '15kb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg2, name: 'sample video', date: '07/10/21, 03:30', type: 'mp4', size: '30mb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg1, name: 'sampl image', date: '07/10/21, 03:30', type: 'jpeg', size: '15kb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg3, name: 'word document', date: '07/10/21, 03:30', type: 'doc', size: '15kb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg4, name: 'sample audio', date: '07/10/21, 03:30', type: 'mp3', size: '5.3mb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg2, name: 'sample video', date: '07/10/21, 03:30', type: 'mp4', size: '30mb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' },
  { icon: svg1, name: 'sample image', date: '07/10/21, 03:30', type: 'jpeg', size: '15kb', dpitem1: 'Edit', dpitem2: 'Share', dpitem3: 'Download', dpitem4: 'Info', dpitem5: 'Delete' }
]
