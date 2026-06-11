"use client";

import React from 'react';
import Obfuscate from 'react-obfuscate';
import { cn } from '@/lib/utils';

interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className }: EmailLinkProps) {
  return (
    <Obfuscate
      email={email}
      className={cn("hover:text-primary transition-colors", className)}
    />
  );
}