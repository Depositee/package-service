// Original file: proto/package.proto


export interface Package {
  'id'?: (string);
  'name'?: (string);
  'description'?: (number);
  'weight'?: (number);
  'depositorId'?: (string);
  'depositeeId'?: (string);
  'isAvailable'?: (boolean);
  'isReceived'?: (boolean);
}

export interface Package__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (number);
  'weight'?: (number);
  'depositorId'?: (string);
  'depositeeId'?: (string);
  'isAvailable'?: (boolean);
  'isReceived'?: (boolean);
}
