function DealWithData(data, attr) {//对数据 进行筛选 将attr 一样的忽略 清除
  let c = [];
  let d = {};
  data.forEach(element => {
    if (!d[element[attr]]) {
      c.push({
        [attr]: element[attr],
        allData: [element]
      });
      d[element[attr]] = element;
    } else {
      c.forEach(ele => {
        if (ele[attr] === element[attr]) {
          ele.allData.push(element);
        }
      });
    }
  });
  return c;
}

export default DealWithData;