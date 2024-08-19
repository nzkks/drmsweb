/**
 * Group object array by property
 * Example, groupObjArrayByProperty(array, ( x: Props ) => x.id );
 * @param array
 * @param property
 */
const groupObjArrayByProperty = <T>(
  array: Array<T>,
  property: (x: T) => string,
): { [key: string]: Array<T> } =>
  array.reduce((memo: { [key: string]: Array<T> }, x: T) => {
    if (!memo[property(x)]) {
      memo[property(x)] = [];
    }
    memo[property(x)].push(x);
    return memo;
  }, {});

export default groupObjArrayByProperty;
