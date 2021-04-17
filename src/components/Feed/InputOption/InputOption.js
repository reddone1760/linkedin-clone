import React from "react";
import { InputOptionContainer } from "./InputOption.styles";

// //? React Redux
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../app/features/userSlice";

// //? Firebase
// import { db } from "../../../firebase";
// import firebase from "firebase";
// import { useCollection } from "react-firebase-hooks/firestore";

function InputOption({ id, Icon, color, title, onClick }) {
  // const user = useSelector(selectUser);

  // const [allLikes, loadingAllLikes] = useCollection(
  //   db
  //     .collection("posts")
  //     .doc(id)
  //     .collection("likes")
  //     .orderBy("timestamp", "asc")
  // );

  const likeHandler = () => {
    // const userSetAllreadyLike = allLikes.filter((id) => {
    //   console.log(id.data.uid, user.uid);
    //   if (id.data.uid === user.uid) {
    //     console.log(true);
    //     return true;
    //   } else {
    //     console.log(false);
    //     return false;
    //   }
    // });
    // console.log(userSetAllreadyLike);
    // if (!userSetAllreadyLike[0]) {
    // db.collection("posts")
    //   .doc(id)
    //   .collection("likes")
    //   .add({
    //     displayName: user.displayName,
    //     email: user.email,
    //     uid: user.uid,
    //     photoUrl: user.photoUrl || "",
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   });
    // }
  };

  return (
    <InputOptionContainer
      onClick={() => {
        title === "Like" && likeHandler();
        onClick && onClick();
      }}
    >
      <Icon className="InputOption__Icon" style={{ color: color }} />
      <h4>{title}</h4>
    </InputOptionContainer>
  );
}

export default InputOption;
