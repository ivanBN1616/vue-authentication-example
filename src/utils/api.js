const mocks = {
  auth: { POST: { token: "http://35.181.142.34:8080/login" } },
  "user/me": { GET: { name: "root", title: "root" } }
};

const apiCall = ({ url, method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mocks[url][method || "GET"]);
        console.log(`Mocked '${url}' - ${method || "GET"}`);
        console.log("response: ", mocks[url][method || "GET"]);
      } catch (err) {
        reject(new Error(err));
      }
    }, 1000);
  });

export default apiCall;
