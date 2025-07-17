import React from "react";
import clsx from "clsx";

export default function BoldCopy({
  text = "animata",
  className = "",
  textClassName = "",
  backgroundTextClassName = "",
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        "group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4 font-tourney",
        className
      )}
    >
      <div
        className={clsx(
          "text-4xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={clsx(
          "text-md absolute font-bold uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
} 