import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./main.css";

export default component$(() => {
  const pdfPath = "pdf/SOP.pdf";

  return (
    <>
      <embed type="application/pdf" class="pdf-container" src={pdfPath} />
    </>
  );
});

export const head: DocumentHead = {
  title: "TU Lin's Documents",
};
