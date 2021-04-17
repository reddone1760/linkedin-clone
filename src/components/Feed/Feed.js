import React, { useState, useEffect } from "react";
import {
  FeedContainer,
  InputContainer,
  Input,
  Form,
  InputOptions,
} from "./Feed.styles";

//? Icons
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

//? Compontents
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";

//? Firebase
import firebase from "firebase";
import { db } from "../../firebase";

//? React Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

//? FlipMove
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [messageInner, setMessageInner] = useState("");

  useEffect(() => {
    console.log(messageInner);
  }, [messageInner]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    if (!messageInner.length > 0) return;

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: messageInner,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessageInner("");
  };

  return (
    <FeedContainer>
      <InputContainer>
        <Input>
          <CreateIcon />
          <Form>
            <input
              type="text"
              value={messageInner}
              onChange={(e) => setMessageInner(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </Form>
        </Input>

        <InputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </InputOptions>
      </InputContainer>

      {/* <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            id={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove> */}
      <Post
        id={1243}
        name={"Dion Zeqiri"}
        description={"dion.zeqiri22@gmail.com"}
        message={"Hi there"}
        photoUrl={""}
      />
    </FeedContainer>
  );
}

export default Feed;
