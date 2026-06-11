"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className }: EmailLinkProps) {
  if (!email) return null;
  
  return (
    <span 
      onClick={() => {
        window.location.href = "mailto:" + email;
      }}
      className={cn("hover:text-primary transition-colors cursor-pointer", className)}
      style={{ unicodeBidi: 'bidi-override' }}
    >
      {email}
    </span>
  );
}