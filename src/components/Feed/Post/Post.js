import React, { forwardRef, useState, useEffect } from "react";
import {
  PostContainer,
  Header,
  PostInfo,
  PostBody,
  PostButtons,
  PostReaction,
  PostComment,
  Input,
  Form,
  CommentSection,
} from "./Post.styles";

//? Material-ui/core
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

//? Components
import InputOption from "../InputOption/InputOption";

//? Icons
import CreateIcon from "@material-ui/icons/Create";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PhotoIcon from "@material-ui/icons/Photo";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";

//? React Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";

//? Firebase
import { db } from "../../../firebase";

const Post = forwardRef(({ id, name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const [showCommentSection, setShowCommentSection] = useState(false);
  const [commentInner, setCommentInner] = useState("");

  // useEffect(() => {
  //   db.collection("posts")
  //     .doc(id)
  //     .collection("likes")
  //     .onSnapshot((snapshot) =>
  //       setLikes(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  //   db.collection("posts")
  //     .doc(id)
  //     .collection("comments")
  //     .onSnapshot((snapshot) =>
  //       setComments(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

  return (
    <PostContainer ref={ref}>
      <Header>
        <Avatar src={photoUrl} alt={name}>
          {name[0]}
        </Avatar>
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </Header>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <PostReaction>
        <ThumbUpAltIcon />
        <div>
          <span>{likes.length}</span>
          <p>•</p>
          <span>{comments.length} Kommentare</span>
        </div>
      </PostReaction>
      <PostButtons>
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          id={id}
          title="Like"
          color="gray"
        />
        <InputOption
          Icon={ChatOutlinedIcon}
          onClick={() => {
            setShowCommentSection(!showCommentSection);
          }}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </PostButtons>
      {showCommentSection && (
        <>
          <PostComment>
            <Avatar src={user.photoUrl} alt={user.displayName}>
              {user.displayName[0]}
            </Avatar>
            <Input>
              <IconButton>
                <CreateIcon />
              </IconButton>
              <Form>
                <input
                  type="text"
                  placeholder="Add a comment ..."
                  value={commentInner}
                  onChange={(e) => setCommentInner(e.target.value)}
                />
                <button
                  onClick={() => {
                    alert(commentInner);
                  }}
                  type="submit"
                >
                  Send
                </button>
              </Form>
              <IconButton>
                <SentimentSatisfiedIcon />
              </IconButton>
              <IconButton>
                <PhotoIcon />
              </IconButton>
            </Input>
          </PostComment>
          <CommentSection>
            <Header>
              <Avatar src={photoUrl} alt={name}>
                {name[0]}
              </Avatar>
              <PostInfo comment={true}>
                <h2>{name}</h2>
                <p>{description}</p>
              </PostInfo>
            </Header>
          </CommentSection>
        </>
      )}
    </PostContainer>
  );
});

export default Post;
