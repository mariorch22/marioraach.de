export interface ImprintData {
  title: string;
  legalReference: string;
  operator: {
    title: string;
    name: string;
  };
  address: {
    title: string;
    street: string;
    city: string;
  };
  contact: {
    title: string;
    email: string;
  };
  responsible: {
    title: string;
    name: string;
    street: string;
    city: string;
  };
  disclaimer: {
    title: string;
    sections: Array<{ title: string; content: string }>;
  };
}
