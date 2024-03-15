"use client";
import React from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const UnexpectedErrorPage = ({ error, reset }: Props) => {
  console.log("GII");
  return (
    <div>
      An unexpected error has occurred.
      <div>ERROR: {error.stack}</div>
      <button className="btn" onClick={reset}>
        RETRY
      </button>
    </div>
  );
};

export default UnexpectedErrorPage;
