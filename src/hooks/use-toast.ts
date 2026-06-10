"use client";

import { toast as sonnerToast } from "sonner";
import React from "react";

type ToastProps = {
  id?: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
};

/**
 * Modern, SSR-safe toast function using sonner.
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
    toasts: [] as ToastProps[],
    dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  };
}