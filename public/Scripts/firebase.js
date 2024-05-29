// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZxVDQ9ll8SuyKBvspqnNWzgrKuvIvIk0",
  authDomain: "tracrime-e48f7.firebaseapp.com",
  projectId: "tracrime-e48f7",
  storageBucket: "tracrime-e48f7.appspot.com",
  messagingSenderId: "619134878634",
  appId: "1:619134878634:web:787f8b552def30a11d21d3",
  measurementId: "G-QYB4TP2CTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function fetchVideos() {
    const db = firebase.database();
    db.ref('/videos').once('value').then(snapshot => {
        const videos = snapshot.val();
        const slider = document.getElementById('videoSlider');
        const nav = document.getElementById('videoNav');
        videos.forEach(video => {
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.className = 'slide';
            videoElement.id = `slide-${video.id}`;
            const sourceElement = document.createElement('source');
            sourceElement.src = video.src;
            videoElement.appendChild(sourceElement);
            slider.appendChild(videoElement);

            const navLink = document.createElement('a');
            navLink.href = `#slide-${video.id}`;
            navLink.textContent = video.title;
            nav.appendChild(navLink);
        });
    });
}
