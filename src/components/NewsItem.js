import React from "react";

export default function NewsItem(props) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !props.link
              ? "https://cdn.pixabay.com/photo/2022/01/29/13/08/computer-screen-6977451_1280.png"
              : props.link
          }
          className="card-img-top"
        />

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author ? props.author : "unknown"} Last updated
              {` ` + props.updated_at} mins ago
            </small>
          </p>

          <a
            href={props.goToUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
