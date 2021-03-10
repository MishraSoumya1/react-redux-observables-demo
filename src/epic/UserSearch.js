import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
// import { fetchUsersSuccess } from "../action/UserAction";
import { createAction } from "redux-actions";

const fetchUsersSuccess = createAction("FETCH_USERS_SUCCESS");

const getAllUsers = () =>
  ajax.get(`http://dummy.restapiexample.com/api/v1/employees`);

const handleSuccess = (payload) => fetchUsersSuccess(payload);

export const fetchUsersEpic = (action$) => {
  return action$.pipe(
    ofType("FETCH_USERS_REQUEST"),
    mergeMap((action) => {
      console.log("Merge map", action);
      return getAllUsers().pipe(
        map((response) => {
          console.log("response from api", response);
          if (response.status === 200)
            return handleSuccess({ users: response.response.data });
        })
      );
    })
  );
};

export default fetchUsersEpic;
