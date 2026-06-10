"use client";

import { toast as sonnerToast } from "sonner";
import React from "react";

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
};

/**
 * Modern, SSR-safe toast function using sonner.
 * Prevents cross-request state pollution by avoiding module-level globals.
 */
export function toast({ title, description, variant, ...props }: ToastProps) {
  const options = {
    description,
    ...props,
  };

  const id = variant === "destructive" 
    ? sonnerToast.error(title as string, options)
    : sonnerToast(title as string, options);

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (newProps: ToastProps) => sonnerToast(newProps.title as string, { id, ...newProps }),
  };
}

export function useToast() {
  return {
    toast,
    dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  };
}