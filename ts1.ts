
/**
 * -- TypeScript is superset of javascript. It helps to remove errors occur at production time. 
 */

interface Iprofile {
  id: number;
  name: string;
  username: string;
  email: any;
  address: Iaddress;
  phone: string;
  website: string;
  company: Icompany;
}

interface Iaddress {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: Igeo;
}

interface Igeo {
  lat: string;
  lng: string;
}

interface Icompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

const profile: Iprofile[] = [{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suit: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}];
