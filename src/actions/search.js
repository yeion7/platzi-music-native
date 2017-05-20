import { fetchItems } from "../utils/api";

export const onSetItems = payload => {
  return {
    type: "SET_ITEMS",
    payload
  };
};

export function fecthList(text) {
  const thunk = async (dispatch, getState) => {
    const data = await fetchItems(text);
    dispatch(
      onSetItems({
        text,
        items: data,
        fetchReady: true
      })
    );
  };

  thunk.meta = {
    debounce: {
      time: 300,
      key: "SET_ITEMS",
      cancel: false
    }
  };

  return thunk;
}
