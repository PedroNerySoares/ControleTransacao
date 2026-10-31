"use client";

import * as React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

function Avatar({
  className = "",
  src,
  alt = "",
  fallback,
  children,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {(!src || hasError || !isLoaded) && (
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
          {fallback}
        </span>
      )}

      {children}
    </div>
  );
}

export { Avatar };