export const fetchData = async () => {
  try {
    const response = await fetch('http://api.plos.org/search?q=title:"Popular"')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.response.docs);
        return response.response.docs;
      });

    return response;
  } catch (error) {
    throw error;
  }
};
