import Error from "next/error";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const NotFound404 = (props: Props) => {
  return (
    <html lang="en">
      <body>
        HTTP 404: Not Found
      </body>
    </html>
  );
};

export default NotFound404;
