"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure
        ("d417132f-797a-4e82-944d-eba3d70f81ac");
    }, [])
    return null;
}