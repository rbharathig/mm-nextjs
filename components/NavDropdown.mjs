import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function NavDropdown({ label, children }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 font-medium hover:text-blue-600 transition">
        {label}
        <span className="text-sm">▾</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={10}
        className="bg-white shadow-xl rounded-xl p-6 w-[420px] animate-in fade-in zoom-in-95"
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
