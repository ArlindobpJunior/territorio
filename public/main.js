// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1f9-Y0WRkAfauAIG5JXzhGvvwHc9BMwE",
  authDomain: "territorio-22630.firebaseapp.com",
  projectId: "territorio-22630",
  storageBucket: "territorio-22630.appspot.com",
  messagingSenderId: "438317440364",
  appId: "1:438317440364:web:cc6a0e2863b00b4949a749",
  measurementId: "G-4YMNGR96P1",
};

// show/hide numeros
const numeroItems = document.querySelectorAll("section.numeros .numero");

numeroItems.forEach((numero) => {
  numero.querySelector(".head").addEventListener("click", () => {
    numero.querySelector(".items").classList.toggle("show-items");
  });
});
