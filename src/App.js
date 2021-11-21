import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "./app.css";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react/cjs/react.development";
import Logo from "./logo.png";
firebase.initializeApp({
  apiKey: "AIzaSyDFIZc-K5S7Oq96RWrLZTsiN3FLw0nWvNU",
  authDomain: "whatsapp-498c9.firebaseapp.com",
  projectId: "whatsapp-498c9",
  storageBucket: "whatsapp-498c9.appspot.com",
  messagingSenderId: "484480416848",
  appId: "1:484480416848:web:7db30b7a91d1f76f20a555",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

// function PostRoom() {
//   const postRef = firestore.collection("posts");
//   const query = postRef.orderBy("createdAt").limit(1000);
//   const [posts] = useCollectionData(query, { idField: "" });
//   const [formValue, setFormValue] = useState("");
//   const sendPost = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL, displayName, email } = auth.currentUser;
//     await postRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//       displayName,
//       email,
//     });
//     setFormValue("");
//   };
//   return (
//     <>
//       <div>
//         {posts && posts.map((pst) => <PostMesage key={pst.id} post={pst} />)}
//       </div>
//       {/* <Form />
//        */}
//          <form action={sendPost}>
//       <input
//         className="type"
//         value={formValue}
//         onChange={(e) => setFormValue(e.target.value)}
//         placeholder="New Post"
//       />
//       <input className="button" type="submit" value="post" />
//     </form>
//     </>
//   );
// }


function Form() {
  const [formValue, setFormValue] = useState("");
  const postRef = firestore.collection("posts");
  const sendPost = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName, email } = auth.currentUser;
    await postRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
      email,
    });
    setFormValue("");
  };
  return (
    <form action={sendPost}>
      <input
        className="type"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="New Post"
      />
      <input className="button" type="submit" value="post" />
    </form>
  );
}
function PostRoom() {
  const dummy = useRef();
  const postRef = firestore.collection('posts');
  const query = postRef.orderBy('createdAt').limit(1000);

  const [posts] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const sendPost = async (e) => {
    e.preventDefault();
    const { photoURL, displayName, email, uid } = auth.currentUser;
    await postRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
      email,
    });
    setFormValue("");

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <main>
        {posts && posts.map((msg) => <PostMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendPost}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </>
  );
}


function PostMessage(props) {
  const { photoURL, displayName, email, uid ,text} = props.message;
  const postClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`f1 ${postClass}`}>
      <div className="f1-first-child">
        <div className="lost">
          <img className="f1-first-child-img" alt="usermg" src={photoURL} />
          <p className="f1-first-child-p">{displayName}</p>
        </div>
        <button className="fl-btn">report</button>
      </div>
      <hr />
      <div className="f1-second-child">
        <p style={{ color: "black" }}>{text}</p>
      </div>
      <hr />
      <div className="f1-third-child">
        <div>
          <p>{email}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="sign-in">
      <img src={Logo} alt="m" />
      <h2>make sure u dont go aginst our community rules</h2>
      <h4>
        do not beg for money online do not use insultive workds like fuck you,
        bitch,murda fucker
      </h4>
      <button
        style={{
          padding: "15px 30px",
          fontSize: ".9rem",
          color: "white",
          outline: "none",
          border: "none",
        }}
        onClick={signInWithGoogle}
      >
        sign in with Gmail
      </button>
      <h4>if you are sign in succesfully you will be taken to the home page</h4>
      <PostRoom />
    </div>
  );
}
const App = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <Home /> : <SignIn />}</div>;
  // return <Home />;
};

const Home = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <div>
        <input type="text" />
        <div class="content">
          <nav className="sidebar">
            <figure className="profile">
              <img className="profile" src={user.photoURL} alt="" />
              <h2 className="profile-h2">{user.displayName}</h2>
              <div className="edit">
                <input className="button" type="button" value="Add Bio" />
                <input
                  className="button-reverse"
                  type="button"
                  value="Edit profile "
                />
              </div>
            </figure>
          </nav>
          <main class="main-content">
            <nav class="blue">
              <figure class="img-container">
                <img class="img" src="nat-1-large.jpg" alt="" />
              </figure>

              <div class="f1o2">
                <p>home</p>
                <p>message</p>
                <p>notification</p>
                <p>live videos</p>

                <Form />
                {user ? (
                  auth.currentUser && (
                    <p onClick={() => auth.signOut()}>sign out</p>
                  )
                ) : (
                  <p onClick={signInWithGoogle}>sign in</p>
                )}
              </div>
            </nav>
            <div className="context">
              <PostMessage />
              <PostRoom />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default App;
