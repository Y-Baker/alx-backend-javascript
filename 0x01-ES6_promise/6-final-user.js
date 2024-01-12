import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(fileName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const result = [];
    for (const one of data) {
      result.push({
        status: one.status,
        value: one.status === 'fulfilled' ? one.value : `Error: ${one.reason}`,
      });
    }
    return result;
  });
}

export default handleProfileSignup;
