const getLocalStorage = (localStorageName) =>{
    const getLocalStorageData = localStorage.getItem(localStorageName);

    if(getLocalStorageData){
        return JSON.parse(getLocalStorageData);
    }
    return []
}

const saveLocalStorage = (id, localStorageName) => {
  const getLocalStorageData = getLocalStorage(localStorageName);

  const isExist = getLocalStorageData.find((localStorageId) => localStorageId === id);
  if(!isExist){
    getLocalStorageData.push(id)
    localStorage.setItem(localStorageName, JSON.stringify(getLocalStorageData));
  }
};

export { getLocalStorage, saveLocalStorage };