const getItems = () => {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
        title: "Some news article",
        url: "https://oceanconservancy.org/climate/?ea.tracking.id=23HPXGJAXX&utm_medium=PaidSearch&utm_source=GoogleGrants&utm_campaign=FY23&gad_source=1&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP4nbqnM344v3Q4OkAh83DQdkJEKW3nhfDkOMvrBCaSPCRYqm-88OeUaAjqmEALw_wcB",
        // ...etc, whatever properties it's supposed to have
        image:
          "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      },
      {
        id: "65f7368dfb74bd6m92114c85", // I just generated this at random from a mongodb id generator website
        title: "Some news article",
        url: "put some actual article URL here",
        // ...etc, whatever properties it's supposed to have
        image:
          "https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_1280.jpg",
      },
      {
        id: "65f7368drv374bd6m92114c85", // I just generated this at random from a mongodb id generator website
        title: "Some news article",
        url: "put some actual article URL here",
        // ...etc, whatever properties it's supposed to have
        image:
          "https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_1280.jpg",
      },
    ])
  );
};
const api = {
  getItems,
};

export default api;
