"use client";

import { authConfig, loginRequest } from "@/lib/msal/config";
import React from "react";

export default function AuthDebugInfo() {
  const { clientId, authority } = authConfig.auth;
  const scopes = loginRequest.scopes;

  return (
    <div
      style={{
        padding: "1rem",
        fontFamily: "monospace",
        background: "#f3f3f3",
        borderRadius: "6px",
      }}
    >
      <h3>MSAL Config Debug Info</h3>
      <p>
        <strong>Client ID (App Id):</strong> {clientId}
      </p>
      <p>
        <strong>Authority:</strong> {authority}
      </p>
      <p>
        <strong>Requested Scopes:</strong>{" "}
        {scopes && scopes.length > 0 ? scopes.join(", ") : "None"}
      </p>
    </div>
  );
}