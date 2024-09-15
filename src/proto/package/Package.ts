// Original file: proto/package.proto


export interface Package {
  'id'?: (string);
  'name'?: (string);
  'description'?: (number);
  'weight'?: (number);
  'depositorId'?: (number);
  'depositeeId'?: (number);
  'isAvailable'?: (boolean);
  'isReceived'?: (boolean);
}

export interface Package__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (number);
  'weight'?: (number);
  'depositorId'?: (number);
  'depositeeId'?: (number);
  'isAvailable'?: (boolean);
  'isReceived'?: (boolean);
}
