import type { ReactNode } from "react";

// Renders the small Markdown subset used for blog posts, styled for long-form reading.

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-plum">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 1) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

const whollyBold = /^\*\*[^*]+\*\*$/;
const whollyItalic = /^\*[^*]+\*$/;

function block(text: string, key: number): ReactNode {
  const lines = text.split("\n");

  if (text.startsWith("## ")) {
    return (
      <h2 key={key} className="mt-16 mb-6 text-[clamp(1.625rem,3vw,2.125rem)] leading-tight font-medium first:mt-0">
        {text.slice(3)}
      </h2>
    );
  }
  if (text.startsWith("### ")) {
    return (
      <h3 key={key} className="mt-10 mb-4 text-[clamp(1.25rem,2vw,1.4375rem)] leading-snug font-medium text-magenta">
        {text.slice(4)}
      </h3>
    );
  }
  if (lines.every((line) => line.startsWith("- "))) {
    return (
      <ul key={key} className="my-6 space-y-3 pl-1">
        {lines.map((line) => (
          <li key={line} className="relative pl-7">
            <span aria-hidden="true" className="absolute top-[0.8em] left-1 size-1.5 rounded-full bg-magenta" />
            {inline(line.slice(2))}
          </li>
        ))}
      </ul>
    );
  }
  if (lines.every((line) => /^\d+\. /.test(line))) {
    return (
      <ol key={key} className="my-8 space-y-4 rounded-xl bg-mauve/60 p-6 sm:p-8">
        {lines.map((line, i) => (
          <li key={line} className="grid grid-cols-[2rem_1fr] gap-3">
            <span aria-hidden="true" className="font-heading text-xl leading-[1.6] text-magenta">
              {i + 1}
            </span>
            <span>{inline(line.replace(/^\d+\. /, ""))}</span>
          </li>
        ))}
      </ol>
    );
  }

  const paragraph = lines.join(" ");
  if (whollyBold.test(paragraph)) {
    // A standalone bold line reads as a key statement.
    return (
      <p key={key} className="my-8 font-heading text-[clamp(1.25rem,2.2vw,1.5rem)] leading-snug text-plum">
        {paragraph.slice(2, -2)}
      </p>
    );
  }
  if (whollyItalic.test(paragraph)) {
    // A standalone italic line is an inner thought: set it apart.
    return (
      <p key={key} className="my-6 border-l-2 border-rose pl-5 font-heading text-[1.1875rem] text-plum/90 italic">
        {paragraph.slice(1, -1)}
      </p>
    );
  }
  return (
    <p key={key} className="my-5">
      {inline(paragraph)}
    </p>
  );
}

export function Prose({ markdown }: { markdown: string }) {
  const blocks = markdown.trim().split(/\n\s*\n/);
  return (
    <div className="text-[1.0625rem] leading-[1.85] text-charcoal/90 sm:text-[1.125rem]">
      {blocks.map((text, i) => block(text.trim(), i))}
    </div>
  );
}
