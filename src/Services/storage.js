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

function uploadStudies(file , data){
    console.log("uploading ..")
    // var offerLink
    let spaceRef = ref(storageRef , `Studies/${data.student_id}_studies.pdf`);
    // 'file' comes from the Blob or File API
    uploadBytes(spaceRef, file).then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(spaceRef).then((url) => {
            console.log(url);
            let sendData = {
                student_id: data.student_id,
                higher_studies: {
                    offer_link: url,
                    fellowship: data.higher_studies.fellowship,
                    programme: data.higher_studies.programme,
                    branch: data.higher_studies.branch,
                    institution: data.higher_studies.institution,
                    exam_cleared: data.higher_studies.exam_cleared,
                    institution_id: data.higher_studies.institution_id,
                }
        }
        console.log(sendData)
        axios.put(`${process.env.REACT_APP_BASE_URL}/student/update/studies`, sendData , headers)
        .then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        })}
        ).catch((error) => {
            console.log(error);
        }
        );
        console.log('Uploaded a blob or file!');
    });
}

function uploadJob(file , data){
    console.log("uploading ..")
    // var offerLink
    let spaceRef = ref(storageRef , `Job/${data.student_id}_job.pdf`);
    // 'file' comes from the Blob or File API
    uploadBytes(spaceRef, file).then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(spaceRef).then((url) => {
            console.log(url);
            let sendData = {
                student_id: data.student_id,
                job_type: data.job_type,
                job_info: {
                    offer_link: url,
                    company_name: data.job_info.company_name,
                    designation: data.job_info.designation,
                    salary: data.job_info.salary
                },
                internship_info: {
                    offer_link: url,
                    company_name: data.internship_info.company_name,
                    designation: data.internship_info.designation,
                    salary: data.internship_info.salary
                }
        }
        console.log(sendData)
        axios.put(`${process.env.REACT_APP_BASE_URL}/student/update/job`, sendData , headers)
        .then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        })}
        ).catch((error) => {
            console.log(error);
        }
        );
        console.log('Uploaded a blob or file!');
    });
}

function uploadScoreCard(file , student_id , fileNo){
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
        axios.post(`${process.env.REACT_APP_BASE_URL}/student/add/scorecard`, data , headers)
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

function uploadProfilePic(file , data){
    console.log("uploading ..")
    let spaceRef = ref(storageRef , `profile/${data.student_id}.jpg`);
    // 'file' comes from the Blob or File API
    uploadBytes(spaceRef, file).then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(spaceRef).then((url) => {
            console.log(url);
            let sendData = {
                student_id: data.student_id,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                phone: data.phone,
                photo: url,
                roll_no: data.roll_no,
                branch: data.branch,
                batch: data.batch,
                gender: data.gender,
                current_sem: data.current_sem
        }
        console.log(sendData)
        axios.put(`${process.env.REACT_APP_BASE_URL}/student/update/personal`, sendData , headers)
        .then(response => {
            console.log(response);
        }).catch(err => {
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

export { uploadStudies, uploadProfilePic , uploadScoreCard, uploadJob }
