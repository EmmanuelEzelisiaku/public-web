// import React from 'react'


// import { useState,useRef } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData} from "react-firebase-hooks/firestore";
// const firestore = firebase.firestore();
// firebase.initializeApp({
//     apiKey: "AIzaSyDFIZc-K5S7Oq96RWrLZTsiN3FLw0nWvNU",
//     authDomain: "whatsapp-498c9.firebaseapp.com",
//     projectId: "whatsapp-498c9",
//     storageBucket: "whatsapp-498c9.appspot.com",
//     messagingSenderId: "484480416848",
//     appId: "1:484480416848:web:7db30b7a91d1f76f20a555",
//   });


// const Message = ({auth}) => {
//     const [user] = useAuthState({auth});
//     return (
//       <div className="App">
//         <header></header>
//         <section><ChatRoom  user={auth}/></section>
//       </div>
//     );
// }

// function ChatRoom({auth}) {
//   const dummy = useRef()
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(25);
//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");
//   const sendMessage = async(e) => {
//     e.preventDefault();
//     const { uid, photoURL } = auth.currentUser;
//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });
//     setFormValue("");

//     dummy.current.scrollIntoView({behaviour:'smooth'});
//   };
//   return (
//     <>
//       <main>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       <div ref={dummy}></div>
//       </main>
//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//         />
//         <button type="submit">send</button>
//       </form>
//     </>
//   );
// }
// function ChatMessage(props) {
//   const { text, uid, photoURL,auth } = props.message;
//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} alt='' />
//       <p>{text}</p>
//     </div>
//   );
// }
// export default Message
import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div>
               <h1>hello</h1> 
            </div>
        )
    }
}
