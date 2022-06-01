import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute text-zinc-400 hover:text-zinc-100 top-5 right-5"
      title="Fechar formulário de feedback"
    >
      <X className="w-5 h-4" weight="bold" />
    </Popover.Button>
  );
}
