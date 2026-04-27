// 🔥 YOUR FIREBASE CONFIG (replace with yours)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// 🔐 LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "admin.html";
    })
    .catch(err => alert(err.message));
}

// 📤 ADD MOVIE
function addMovie() {
    db.collection("movies").add({
        title: title.value,
        desc: desc.value,
        image: image.value,
        youtube: youtube.value
    }).then(() => {
        alert("Movie Added!");
    });
}

// 🎬 LOAD MOVIES
if(document.getElementById("movies")){
    db.collection("movies").get().then(snapshot => {
        snapshot.forEach(doc => {
            let m = doc.data();

            document.getElementById("movies").innerHTML += `
                <div>
                    <img src="${m.image}" width="200"><br>
                    <h3>${m.title}</h3>
                    <p>${m.desc}</p>
                    <a href="${m.youtube}" target="_blank">▶ Watch</a>
                </div>
            `;
        });
    });
}