import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./main.css";

export default component$(() => {
  return (
    <>
      <embed type="application/pdf" class="pdf-container" src="/pdf/SOP.pdf" />
    </>
  );
});

export const head: DocumentHead = {
  title: "SOP TU Lin",
};
