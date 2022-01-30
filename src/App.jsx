




import React from 'react';


import Header from './component/molecule/header';

import CardGrid from './component/molecule/CardGrid';
 import SingleCard from './component/molecule/SingleCard';
import { useState,useEffect } from "react";
import {CssBaseline }from "@material-ui/core";

import { GoogleAuthProvider,getAuth,  signInWithPopup } from "firebase/auth";
import BlogHero from './component/atom/bloghero';
import { Container } from "@material-ui/core"
import Mainlist from "./component/molecule/main-list";

import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { app} from "./firebase";

import Auth from './component/auth';

const App = () => {
  
 const cards = [1, 2, 3, 4, ];
  const [showBigCard, setShowBigcard] = useState({
    isShow: false,
    item: 1
  });
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setfilteredNotes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState("dummy");
 

  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();



const getNotes = async () => {
  const notesRef = collection(db, userId);
  const notes = await getDocs(notesRef);
  const noteList = notes.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  setNotes(noteList);
  setfilteredNotes(noteList);
};


useEffect(() => {
  

  getNotes();
},);




const filterNotes = (search) => {
  let tempNote = notes;
  if (search) {
    const filteredNotes = tempNote.filter((note) => note.title.match(search));

    setfilteredNotes(filteredNotes);
  } else {
    setfilteredNotes(tempNote);
  }
};

const createNote = async (note) => {
  console.log("created", note);
  const noteRef = collection(db, userId);
  const dcRef = await addDoc(noteRef, note);
 
  await getNotes();
  console.log("dcRef", dcRef);
};

const deleteNote = async (id) => {
  await deleteDoc(doc(db, userId, id));
  await getNotes();
};





  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setCurrentUser(res.user);
        setUserId(res.user.uid);
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  return (
    
    <>
   
{currentUser ? (  
  <>
  <CssBaseline/>
  <Header currentUser={currentUser}
  filteredNotes={filterNotes}/>
  <BlogHero/>
{showBigCard.isShow ? (
        <Container >
          <SingleCard setShowBigcard={setShowBigcard} item={showBigCard.item} />
        </Container>
      ) : (
        <main>
          <CardGrid setShowBigcard={setShowBigcard} childCards={cards} />
        </main>
        )}
     
   <Mainlist {...{setNotes,createNote,deleteNote}}
   notes={filteredNotes}
   />

   </>
) : (<Auth handleSignIn={handleSignIn}/>
)}
   
    </> 
  );
};

export default App;
    
  

