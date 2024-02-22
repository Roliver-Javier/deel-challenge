export const getSearchData = async (key, debounceTime = 500, limit = 5) => {
    const response = await (await fetch('data/mock.json')).json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.filter((data) => data.label.toLowerCase().includes(key.toLowerCase())).slice(0, limit));
      }, debounceTime);
    });
  };

  export const getAllData = async (key) => {
    const response = await (await fetch('data/mock.json')).json();
    return new Promise((resolve) => {
        resolve(response);
    });
  };