// Script rulat sincron la parsarea HTML-ului, înainte de primul paint (vezi ghidul Next „preventing flash”).
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Activează stările inițiale ascunse doar dacă vizitatorul nu cere mișcare redusă.
// Dacă JS-ul paginii nu pornește în 4s, totul redevine vizibil.
export const motionBootScript = `(function(){var d=document.documentElement;if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},4000)})();`;
