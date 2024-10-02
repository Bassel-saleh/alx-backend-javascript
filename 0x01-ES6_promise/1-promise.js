export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reeject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reeject(new Error('The fake API is not working currently'));
    }
  });
}
