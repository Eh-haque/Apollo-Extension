

function setDataLocalStorage(data, dataName) {
  const dataToString = JSON.stringify(data);
  localStorage.setItem(dataName, dataToString);
}

function removeLocalStorageData() {
  localStorage.removeItem("assignment-data");
}
