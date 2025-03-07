"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ServiceModalProps {
    title: string;
    description: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function ServiceModal({ title, description, open, setOpen }: ServiceModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded-lg shadow-lg w-80 z-50">
                    {/* Cerrar Modal */}
                    <div className="flex justify-between items-center">
                        <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
                        <Dialog.Close asChild>
                            <button className="text-gray-600 hover:text-black">
                                <X size={24} />
                            </button>
                        </Dialog.Close>
                    </div>

                    {/* Contenido */}
                    <Dialog.Description className="mt-4">{description}</Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
