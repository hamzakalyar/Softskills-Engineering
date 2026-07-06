import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80">
      <div className="h-16 w-16 rounded-full border-4 border-white/10 border-t-accent animate-spin" />
    </div>
  );
}
