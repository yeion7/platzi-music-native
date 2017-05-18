import { combineReducers } from "redux";
import { search } from "./search";
import { buildList, fetchReady } from "./list";
import {
  setSong,
  setAlbum,
  showPlayer,
  changeExpand,
  setPlayback,
  setIndex
} from "./player";

const list = combineReducers({
  items: buildList,
  fetchReady: fetchReady
});

const player = combineReducers({
  currentSong: setSong,
  playList: setAlbum,
  showPlayer: showPlayer,
  expanded: changeExpand,
  playbackInstance: setPlayback,
  index: setIndex
});

const rootReducer = combineReducers({
  search,
  list,
  player
});

export default rootReducer;
