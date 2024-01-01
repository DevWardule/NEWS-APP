import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResult, setTotalResult] = useState(0);

  //syntax 1 => if we want to use if then

  //   useEffect(() => {
  //     fetch(
  //       "https://newsapi.org/v2/top-headlines?country=in&apiKey=d0f9e59ca6bd4d16a4b87fd8303987a8"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setArticles(json.articles));
  //   }, []);

  //vvvvvvvvvvvvvvimp    => useEffect doest take async function as parameter.
  // so below i have created new fetchdata async function and called separately.

  // syntax 2 => if we want to use async await
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d0f9e59ca6bd4d16a4b87fd8303987a8&page=1&pageSize=${props.pageSize}`
      );

      let parsedRes = await res.json();
      setArticles(parsedRes.articles);
      setTotalResult(parsedRes.totalResults);
    };

    fetchData();
  }, []);

  const prevFunc = async () => {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=d0f9e59ca6bd4d16a4b87fd8303987a8&page=${page - 1}&pageSize=${
        props.pageSize
      }`
    );
    setLoading(true);
    let parsedRes = await res.json();
    setPage(page - 1);
    setArticles(parsedRes.articles);
    setTotalResult(parsedRes.totalResults);
    setLoading(false);
  };

  const nextFunc = async () => {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=d0f9e59ca6bd4d16a4b87fd8303987a8&page=${page + 1}&pageSize=${
        props.pageSize
      }`
    );
    setLoading(true);
    let parsedRes = await res.json();
    setPage(page + 1);
    setArticles(parsedRes.articles);
    setTotalResult(parsedRes.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=d0f9e59ca6bd4d16a4b87fd8303987a8&page=${page + 1}&pageSize=${
        props.pageSize
      }`
    );
    setPage(page + 1);
    let parsedRes = await res.json();
    setArticles(articles.concat(parsedRes.articles));
    console.log(articles.length);
    setTotalResult(parsedRes.totalResults);
  };

  return (
    <>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={totalResult}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        // loader={<Spinner />}
        loader={<h4>Loading...</h4>}
      >
        {/* {console.log(articles.length)} */}
        {/* {console.log(totalResult)} */}
        {console.log(articles.length !== totalResult)}
        <div className="container">
          <h1>Top Headlines from {props.category}</h1>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    content={element.description}
                    link={element.urlToImage}
                    goToUrl={element.url}
                    author={element.author}
                    updated_at={new Date(element.publishedAt).toUTCString()}
                  />
                </div>
              );
            })}
            {/* <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              onClick={prevFunc}
              type="button"
              className="btn btn-dark"
            >
              &larr;prev
            </button>
            <button
              disabled={page + 1 > Math.ceil(totalResult / 9)}
              onClick={nextFunc}
              type="button"
              className="btn btn-dark"
            >
              next &rarr;
            </button>
          </div> */}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
