function addReq(sectionName, reqNumber, boxId, descriptionId, numberId) {
  // console.log(sectionName, reqNumber, boxId, descriptionId, numberId);
  const reqName = "req-" + reqNumber;

  const description = document.getElementById(descriptionId).value;
  const number = document.getElementById(numberId).value;

  // console.log(description, number);

  const localStorageData = getLocalStorageData();
  // console.log(localStorageData);

  if (!localStorageData[sectionName]) {
    localStorageData[sectionName] = {};
  }
  localStorageData[sectionName][reqName] = {};
  localStorageData[sectionName][reqName]["description"] = description;
  // console.log(sectionName);
  if (sectionName.includes("অপশনাল")) {
    localStorageData[sectionName][reqName]["correct"] = false;
  } else {
    localStorageData[sectionName][reqName]["correct"] = true;
  }
  // localStorageData[sectionName][reqName]["correct"] = true;
  localStorageData[sectionName][reqName]["number"] = number;

  // console.log(localStorageData);

  setDataLocalStorage(localStorageData, "assignment-data");
  document.getElementById(boxId).style.display = "none";
}
