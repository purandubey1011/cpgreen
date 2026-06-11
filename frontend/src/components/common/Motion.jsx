import React from "react";

export const Reveal = ({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  split = false,
}) => {
  const props = split
    ? { "data-split": true }
    : { "data-reveal": true, "data-delay": delay };

  return React.createElement(Tag, { className, ...props }, children);
};

export const Stagger = ({ as: Tag = "div", children, className = "" }) => {
  return React.createElement(Tag, { className, "data-stagger": true }, children);
};

export const AnimatedImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  parallax = false,
}) => {
  return (
    <div className={`overflow-hidden ${wrapperClassName}`} data-image-reveal>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        data-parallax={parallax || undefined}
      />
    </div>
  );
};
