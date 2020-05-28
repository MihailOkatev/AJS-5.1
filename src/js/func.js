export default function sortObjProp(data, rules) {
  const resultArr = [];
  const copyOfData = { ...data };
  const keys = Object.keys(copyOfData);
  keys.sort();
  rules.forEach((item) => {
    if (keys.includes(item)) {
      resultArr.push({ [item]: copyOfData[item] });
      keys.splice(keys.indexOf(item), 1);
    }
  });
  keys.forEach((item) => {
    resultArr.push({ [item]: copyOfData[item] });
  });
  return resultArr;
}
