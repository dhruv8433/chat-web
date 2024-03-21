"use client"
import ProfileLeft from "@/app/components/Settings/ProfileLeft";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
    const { posts } = useParams()

    return (
        <div>
            <ProfileLeft posts={posts} />
        </div >
    );
};

export default page;


