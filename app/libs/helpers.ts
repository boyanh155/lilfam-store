import { NextResponse } from "next/server";

export function responseError(error: any | null = null, status: number = 500) {
  console.log(error);
  return new NextResponse(
    JSON.stringify({
      status: status < 500 ? "fail" : "error",
      error: error ? error : null,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}
