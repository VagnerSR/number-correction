export type Process = {
  numberCNJ: string;
  n?: string;
  d?: string;
  a?: string;
  j?: string;
  tr?: string;
  o?: string;
  courtName?: string;
};

export type Court = {
  name: string;
};

export type Courts = {
  [key: number]: {
    [key: number]: Court;
  };
};
