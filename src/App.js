import React, { useEffect } from "react";
import { AppContainer, AppBody } from "./App.styles";

//? React Redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/features/userSlice";
import { selectSend, selectShare } from "./app/features/popUpSlice";
import { auth } from "./firebase";

//? Components
import { Feed, Header, Login, Sidebar, Widgets } from "./components";
import { SendPost } from "./components/PopUps";

function App() {
  const user = useSelector(selectUser);
  // const share = useSelector(selectShare);
  // const send = useSelector(selectSend);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <AppContainer>
      {/* {share && <SendPost />} */}
      {/* {console.log(share)}
      {console.log(send)} */}

      <Header />

      {!user ? (
        <Login />
      ) : (
        <AppBody>
          <Sidebar />
          <Feed />
          <Widgets />
        </AppBody>
      )}
    </AppContainer>
  );
}

export default App;
