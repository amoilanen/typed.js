export const type = (value, typeName, check) => {
  if (!check(value)) {
    throw new Error(`Type violation: ${value} is not a ${typeName}`);
  }
  return value;
};

export const number = (value) =>
  type(value, 'number', x =>
    typeof x === 'number'
  )

export const bool = '';
export const string = '';
export const array = '';

export const object = '';

//TODO: Here construct an actual validator using the shape specified
export const shape = '';