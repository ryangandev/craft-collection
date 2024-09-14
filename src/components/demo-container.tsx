import React, { HTMLAttributes } from 'react';

import CopyButton from '@/components/copy-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

type DemoContainerProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  hideCode?: boolean;
};

export default function DemoContainer({
  name,
  children,
  className,
  hideCode = false,
  ...props
}: DemoContainerProps) {
  return (
    <div
      className={cn('gorup relative my-4 flex flex-col space-y-2', className)}
    >
      <Tabs defaultValue="preview">
        <div className="pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="preview"
          className="relative rounded-md border border-border"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={'hello world'}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="code"
          className="relative rounded-md border border-border"
        >
          <div className="flex items-center justify-end p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={'hello world'}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
