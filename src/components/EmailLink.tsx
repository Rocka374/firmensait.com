"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface EmailLinkProps {
  email: string;
  className?: string;
}

/**
 * Прост компонент за защита на имейла от ботове, 
 * който не разчита на външни библиотеки и е напълно безопасен за React 19.
 */
export default function EmailLink({ email, className }: EmailLinkProps) {
  const [user, domain] = email.split('@');
  
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
      }}
      className={cn("hover:text-primary transition-colors cursor-pointer", className)}
      title="Изпрати имейл"
    >
      <span className="hidden md:inline">{user}</span>
      <span className="md:hidden">Изпрати имейл</span>
      <span className="hidden md:inline">@{domain}</span>
    </a>
  );
}