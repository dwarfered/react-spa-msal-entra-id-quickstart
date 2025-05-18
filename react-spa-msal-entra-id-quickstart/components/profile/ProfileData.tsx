"use client";

import { msGraphEndPoints } from "@/lib/msgraph/endpoints";
import { fetcher } from "@/lib/msgraph/fetcher";
import { AuthenticatedTemplate } from "@azure/msal-react";
import useSWR from "swr";

export type GraphData = {
  displayName: string;
  jobTitle: string;
  mail: string;
  businessPhones: string[];
  officeLocation: string;
};

export const ProfileData = () => {
  const { data, error, isLoading } = useSWR<GraphData>(
    msGraphEndPoints.graphMe,
    fetcher
  );

  if (error) {
    console.log(error);
    return <div>Failed to fetch data. Are you signed in?</div>;
  }
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <AuthenticatedTemplate>
    <ul>
      <li>displayName: {data?.displayName}</li>
      <li>jobTitle: {data?.jobTitle}</li>
      <li>mail: {data?.mail}</li>
      <li>phone: {data?.businessPhones[0]}</li>
      <li>location: {data?.officeLocation}</li>
    </ul>
    </AuthenticatedTemplate>

  );
};