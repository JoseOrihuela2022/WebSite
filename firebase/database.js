import { app } from './config'
import { getDatabase, ref, onValue, set } from "firebase/database";

const db = getDatabase(app);

function getData(setUserData) {
  onValue(ref(db, '/'), (snapshot) => {
    if (snapshot.exists()) {
      setUserData(snapshot.val());
    } else {
      setUserData('');
    }

  });
}
function writeUserData(object, setUserSuccess) {
  set(ref(db, '/'), object)
    .then(() => setUserSuccess !== null ? setUserSuccess('save') : '')
    .catch(() => setUserSuccess('repeat'))
}

export { getData, writeUserData }