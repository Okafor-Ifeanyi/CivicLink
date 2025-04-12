"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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
  items: { value: string; label: string }[];
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  classes?: {
    tirgger?: string;
    content?: string;
    input?: string;
    items?: string;
  };
  emptyLabel?: string;
}

export const ComboBox = ({
  items,
  placeholder = "Select an item",
  defaultValue = "",
  value: controlledValue,
  onChange,
  classes,
  emptyLabel = "No item found.",
}: ComboBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  const resolvedValue = controlledValue ?? value;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={classes?.tirgger} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {resolvedValue
            ? items.find((item) => item.value === resolvedValue)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", classes?.content)}>
        <Command>
          <CommandInput placeholder={placeholder} className={classes?.input} />
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
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
                  className={classes?.items}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      resolvedValue === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
