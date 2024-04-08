import axiosInstance from "../../interceptor/interceptor";
import {
  allSongStart,
  allSongSuccess,
  allSongFail,
  Song,
  listenSongStart,
  listenSongSuccess,
  listenSongFail,
} from "../reducers/songReducer";
import { Api } from "../store";

export const allSongApi =
  (search: string, limit: number, page: number) =>
  async (
    dispatch: (arg0: {
      payload: Song | undefined;
      type: "song/allSongStart" | "song/allSongSuccess" | "song/allSongFail";
    }) => void
  ) => {
    try {
      dispatch(allSongStart());
      const params: string = search
        ? `${Api}/all-songs?search=${search}&limit=${limit}&page=${page}`
        : `${Api}/all-songs?limit=${limit}&page=${page}`;
      const { data } = await axiosInstance.get(params);
      dispatch(allSongSuccess(data.allSongs));
    } catch (error) {
      dispatch(allSongFail());
    }
  };
export const listenSongApi =
  (id: string) =>
  async (
    dispatch: (arg0: {
      payload: Song | undefined;
      type:
        | "song/listenSongStart"
        | "song/listenSongSuccess"
        | "song/listenSongFail";
    }) => void
  ) => {
    try {
      dispatch(listenSongStart());
      const { data } = await axiosInstance.get(`${Api}/listenSong/${id}`);
      dispatch(listenSongSuccess(data.listenSongs));
    } catch (error) {
      dispatch(listenSongFail());
    }
  };
