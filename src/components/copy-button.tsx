'use client';

import React, { useState } from 'react';
import { GoCheck, GoCopy } from 'react-icons/go';
import { toast } from 'sonner';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn, copyToClipboardWithMeta } from '@/lib/utils';

type CopyButtonProps = ButtonProps & {
  value: string;
};

export default function CopyButton({
  value,
  className,
  variant = 'ghost',
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    if (hasCopied && !value) return;

    await copyToClipboardWithMeta(value);
    setHasCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setHasCopied(false), 1500);
  };

  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(className)}
      onClick={copyToClipboard}
      {...props}
    >
      {hasCopied ? <GoCheck /> : <GoCopy />}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
