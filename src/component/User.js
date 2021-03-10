/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../action/UserAction";

const User = (props) => {
  useEffect(() => {
    props.dispatch(fetchUsers());
  }, []);
  console.log("Data from api", props);
  return (
    <div>
      <p>{JSON.stringify(props.users)}</p>
      <button onClick={() => props.dispatch(fetchUsers())}>Fetch User</button>
    </div>
  );
};

const mapStateToProp = (state) => state;

export default connect(mapStateToProp)(User);
