const handleResolve = () => ({ status: 200, body: 'success' });

const handleReject = () => new Error();

const onFinally = () => {
  console.log('Got a response from the API');
};

function handleResponseFromAPI(promise) {
  promise.then(handleResolve).catch(handleReject).finally(onFinally);
}

export default handleResponseFromAPI;
