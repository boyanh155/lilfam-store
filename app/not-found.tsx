import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const NotFound404 = (props: Props) => {
  return redirect("/en");
};

export default NotFound404;
