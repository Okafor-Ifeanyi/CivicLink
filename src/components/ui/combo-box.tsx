"use client";

import * as React from "react";
import { AlertCircle, Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboBoxProps {
  items: { value: string; label: string }[] | undefined;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  classes?: {
    trigger?: string;
    content?: string;
    input?: string;
    items?: string;
  };
  emptyLabel?: string;
  isLoading?: boolean;
  error?: unknown;
  popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
}

export const ComboBox = ({
  items,
  placeholder = "Select an item",
  defaultValue = "",
  value: controlledValue,
  onChange,
  classes,
  emptyLabel = "No item found.",
  isLoading,
  error,
  popoverContentProps,
}: ComboBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  const resolvedValue = controlledValue ?? value;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between capitalize", classes?.trigger)}
        >
          {resolvedValue
            ? items?.find((item) => item.value === resolvedValue)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[200px] p-0", classes?.content)}
        {...popoverContentProps}
      >
        <Command>
          <CommandInput placeholder="Search..." className={classes?.input} />
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            <CommandGroup>
              {isLoading ? (
                <CommandItem>
                  <Loader2 className="animate-spin text-primary size-4 block mx-auto" />
                </CommandItem>
              ) : error ? (
                <CommandItem className="text-red-500">
                  <AlertCircle className="text-red-500 size-4" /> Error loading
                  data. Please try again
                </CommandItem>
              ) : (
                items?.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue: string) => {
                      setValue(
                        currentValue === resolvedValue ? "" : currentValue
                      );
                      setOpen(false);
                      onChange?.(currentValue);
                    }}
                    className={cn("capitalize", classes?.items)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        resolvedValue === item.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
