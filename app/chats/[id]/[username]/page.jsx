"use client";

import { useParams } from "next/navigation";
import React from "react";
import ChattingBody from "../../ChattingBody";

const page = () => {
  const { id } = useParams();

  return (
    <div className="mt-2">
      <ChattingBody id={id} />
    </div>
  );
};

export default page;
