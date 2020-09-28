import React from "react";
import { useDispatch, useSelector } from "react-redux";
import setAuthedUser from "../actions/authedUser";

export default function Nav() {
  const dispatch = useDispatch();

  const users = Object.keys(
    useSelector(({ users }) => {
      return users;
    })
  );

  // const authedUser = useSelector(({ setAuthedUser }) => {
  //   return setAuthedUser;
  // });

  const handleChangeUser = (e) => {
    const userId = e.target.value;
    dispatch(setAuthedUser(userId));
  };

  // if (authedUser) {
  //   console.log("gonna redirect to..");
  //   return <Redirect to="/home" />;
  // } 
    return (
      <header className="container">
        <div className="game-name">
          <h1 className="">would you rather game</h1>
        </div>

        {users.length > 0 ? (
          <div className="user-select">
            <p>pick one of 3 pre-defined user name</p>
            <select defaultValue={''} onChange={handleChangeUser}>
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
              <option value={null}></option>
            </select>
          </div>
        ) : (
          ""
        )}
      </header>
    );
  
}
