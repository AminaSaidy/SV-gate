const failedAttempts = new Map(); // pan -> { count, blockedUntil }
const activeOTPs = new Map(); //pan -> { token, expiryTime }
const blockedTokens = new Map();
const tokensList = new Set([
  "3D2F91B5B53C1884",
  "145B6DCDC5BB4E619341F2CC71F9205D",
]);

const mockCard1 = {
  pan: "860049******1234",
  expiry: "2605",
  phone: "998900000000",
};

const mockCard2 = {
  otp: "230258",
  pan: "8600123412341234",
  username: "somename",
  status: 0,
  phone: "998901234567",
  fullName: "Cardholder Full Name",
  balance: 6082068610,
  sms: true,
  pincnt: 0,
  aacct: "01041212345600001",
  par: "123422618D661F6A89A62518DF654",
  cardtype: "private",
  holdAmount: 0,
  cashbackAmount: 0,
  token: null,
};

const mockCards = [
  {
    id: "983F6F70F7574E1988661416D64509CE",
    username: "someuser",
    pan: "8600123412341234",
    expiry: "2506",
    status: 1,
    phone: "998901234567",
    fullName: "Bruce Wayne",
    balance: 1200000000,
    sms: false,
    pincnt: 2,
    aacct: "ACC12345678901234567890",
    par: "ABCD1234EFGH5678IJKL91011",
    cardtype: "gold",
    holdAmount: 500000,
    cashbackAmount: 15000
  },
  {
    id: "8F481DD8B5C6********************",
    username: "somename",
    pan: "8600************",
    expiry: "1249",
    status: 0,
    phone: "998998765432",
    fullName: "Robert John Downey",
    balance: 14900601000,
    sms: true,
    pincnt: 0,
    aacct: "*************************",
    par: "123422618D661F6A89A62518DF654",
    cardtype: "private",
    holdAmount: -105000000,
    cashbackAmount: 0
  }
];

const mockCards2 = [
  {
    id: "8F481DD8B5C6********************",
    username: "somename",
    pan: "8600************",
    expiry: "1249",
    status: 0,
    phone: "998*********",
    fullName: "Robert John Downey",
    balance: 14900601000,
    sms: true,
    pincnt: 0,
    aacct: "*************************",
    par: "123422618D661F6A89A62518DF654",
    cardtype: "private",
    holdAmount: -105000000,
    cashbackAmount: 0,
    exceedLimit: 0,
  }
];

const mockPartners = [
  {
    id: "3F319ED471BEEBBE",
    appName: "somename1",
    registrationDate: "10.01.2024 10:00:01",
    verified: true,
  },
  {
    id: "1D90FE531A06D44A",
    appName: "somename2",
    registrationDate: "18.03.2024 18:03:01",
    verified: true,
  },
  {
    id: "3D2F91B5B53C1884",
    appName: "somename3",
    registrationDate: "22.04.2024 12:01:01",
    verified: true,
  },
  {
    id: "8A2E13B7D0012211",
    appName: "somename4",
    registrationDate: "05.02.2024 09:45:00",
    verified: false,
  },
  {
    id: "5C45A7D6E101D222",
    appName: "somename5",
    registrationDate: "11.03.2024 16:20:35",
    verified: true,
  },
];

const cardPartnersMap = {
  "145B6DCDC5BB4E619341F2CC71F9206F": [
    "3F319ED471BEEBBE",
    "1D90FE531A06D44A",
    "3D2F91B5B53C1884",
  ],
  "245B6DCDC5BB4E619341F2CC71F9206F": ["3F319ED471BEEBBE", "8A2E13B7D0012211"],
  "345B6DCDC5BB4E619341F2CC71F9206F": ["5C45A7D6E101D222"],
};

module.exports = {
  mockCard1,
  mockCard2,
  mockCards,
  mockCards2,
  failedAttempts,
  activeOTPs,
  mockPartners,
  cardPartnersMap,
  blockedTokens,
  tokensList,
};
