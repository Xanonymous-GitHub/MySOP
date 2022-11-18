import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./main.css";
import uaParser from "ua-parser-js";

export default component$(() => {
  const os = uaParser().os.name;
  const pdfPath = "pdf/SOP.pdf";

  if (os === "iOS" || os === "Android") {
    location.replace(pdfPath);
  }

  return (
    <>
      <embed type="application/pdf" class="pdf-container" src={pdfPath} />
    </>
  );
});

export const head: DocumentHead = {
  title: "SOP TU Lin",
};
