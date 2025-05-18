"use client";

export default function LoadingOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        zIndex: 9999,
      }}
    >
      Loading...
    </div>
  );
}