let data;

const response = await fetch("http://api.plos.org/search?q=title:Popular")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    // data = response.response.docs;
    // console.log(data[4]);
    return response.response.docs;
  });

export default response;
