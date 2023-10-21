"use client";
import { Button, Slider } from "@mui/material";
import Link from "next/link";

export default function form() {
  return (
    <>
      <p>form page</p>
      <Button>
        <Link href="/">Home</Link>
      </Button>
      <div>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
      </div>
    </>
  );
}
