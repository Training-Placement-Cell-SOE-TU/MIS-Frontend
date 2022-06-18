import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage , ref , uploadBytes , getDownloadURL } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Create a storage reference from our storage service
const storageRef = ref(storage);
var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

export default function uploadScoreCard(file , student_id , fileNo){
    console.log("uploading ..")
    let spaceRef = ref(storageRef , `Scorecard/${student_id}_${fileNo}.pdf`);
    // 'file' comes from the Blob or File API
    uploadBytes(spaceRef, file).then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(spaceRef).then((url) => {
            console.log(url);
            let data = {
                student_id: student_id,
                exam_name: fileNo ,
                scorecard_link: url
        }
        console.log(data)
        axios.post(`https://${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/student/add/scorecard`, data , headers)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        }
        ).catch((error) => {
            console.log(error);
        }
        );
        console.log('Uploaded a blob or file!');
  });
}

function uploadProfilePic(file , student_id){
    console.log("uploading ..")
    let spaceRef = ref(storageRef , `profile/${student_id}.${file.extension}`);
    // 'file' comes from the Blob or File API
    uploadBytes(spaceRef, file).then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(spaceRef).then((url) => {
            console.log(url);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
        console.log('Uploaded a blob or file!');
  });
}

