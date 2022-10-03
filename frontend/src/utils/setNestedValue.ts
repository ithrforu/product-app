export const setNestedValue = <T>(key: string, value: string, obj: T): T => {
  const keyArray: string[] = key.split('.');
  const objCopy = structuredClone(obj)
  let schema: any = objCopy;

  for(let i = 0; i < keyArray.length - 1; i += 1) {
      const elem: string = keyArray[i];
      if( !schema[elem] ) schema[elem] = {}
      schema = schema[elem];
  }

  schema[keyArray[keyArray.length -1]] = value;

  return objCopy;
}