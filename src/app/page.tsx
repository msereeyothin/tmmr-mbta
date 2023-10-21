"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>home page</p>
      <Button>
        <Link href="/form">Form page</Link>
      </Button>
    </>
  );
}
