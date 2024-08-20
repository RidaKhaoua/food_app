import { TStatus } from "@types";
import React from "react";

type Tloading = {
  status: TStatus;
  error: null | string;
  children: React.ReactNode;
};

function Loading({ status, error, children }: Tloading) {
  return (
    <div>
      {status === "pending" ? <p>Loading</p> : error ? <p>{error}</p> : children}
    </div>
  );
}

export default Loading;
