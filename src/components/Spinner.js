import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="text-center my-7">
      <img src={loading} alt="" />
    </div>
  );
}
