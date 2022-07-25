import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);
const imagesRef = ref(storage, 'images');

function uploadIMG(file, setUserImage, setUserSuccess) {
    uploadBytes(imagesRef, file).then((snapshot) => {
        downloadIMG(setUserImage)
        setUserSuccess(true)
    }).catch(e => setUserSuccess('error'));
}

function downloadIMG(setUserImage) {
    getDownloadURL(imagesRef)
        .then((url) => {
            setUserImage(url)
        })
        .catch((error) => {

        });
}

export { uploadIMG, downloadIMG }
