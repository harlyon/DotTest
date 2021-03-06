import { useReducer } from "react";
import NewsReducer from "./newsReducer";
import NewsContext from "./newsContext";
import { GET_HEADLINES, SEARCHED_NEWS, FILTERED_DATE } from "./types";
import axios from "axios";
const NewsState = (props) => {
  const initialState = {
    all_news: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(NewsReducer, initialState);
  const getHeadlines = async () => {
    const res = await axios.get(
      ""
    );
    dispatch({
      type: GET_HEADLINES,
      payload: res.data,
    });
  };
  const searchNews = async (text) => {
    if (text === "") {
      getHeadlines();
    } else {
      const res = await axios.get(
        ``
      );
      dispatch({
        type: SEARCHED_NEWS,
        payload: res.data,
      });
    }
  };
  const filteredDates = async (date) => {
    if (date === "") {
      getHeadlines();
    } else {
      const res = await axios.get(
        ``
      );
      dispatch({
        type: FILTERED_DATE,
        payload: res.data,
      });
    }
  };
  return (
    <NewsContext.Provider
      value={{
        all_news: state.all_news,
        loading: state.loading,
        getHeadlines,
        searchNews,
        filteredDates,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
export default NewsState;
