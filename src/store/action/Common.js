import {CHANGE_ROUTE} from '../reducer/Common';

export function changeRoute(index) {
  return async dispatch => {
    dispatch({type: CHANGE_ROUTE, count: index});
  };
}
