"use client"
import { JSX, useState } from "react";
type ButtonProps = {
};

function Button({}: ButtonProps) {
  return <button>test</button>;
}

function Page() {
  return (
    <div>
      <Button/>
    </div>
  )
}
export default Page