import React from "react";
import loadable from "@loadable/component";
import { LoadingContainer } from "./styles";

export const SmartMeeting = loadable(() => import("pages/SmartMeeting"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const AddMeeting = loadable(() => import("pages/AddMeeting"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const RoomSelect = loadable(() => import("pages/RoomSelect"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const ErrorPage = loadable(() => import("pages/ErrorPage"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});
