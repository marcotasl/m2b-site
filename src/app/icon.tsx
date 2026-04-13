import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon dinâmico — M2B em laranja sobre navy. */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#212741",
          color: "#fa663c",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        M2B
      </div>
    ),
    { ...size },
  );
}
