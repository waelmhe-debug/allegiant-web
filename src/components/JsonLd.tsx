// Inline JSON-LD for schema.org structured data.
// Server-rendered; no client bundle.

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Safe: we control the object shape, and React escapes </script> via dangerouslySetInnerHTML for <script> tags.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
