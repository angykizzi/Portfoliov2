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
                <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl z-50 data-[state=open]:animate-contentShow focus:outline-none border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                            {title}
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-secundary"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </Dialog.Close>
                    </div>

                    {/* Content */}
                    <Dialog.Description className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {description}
                    </Dialog.Description>

                    {/* Footer */}
                    <div className="mt-6 flex justify-end">
                        <Dialog.Close asChild>
                            <button className="px-4 py-2 bg-secundary hover:bg-pink-400 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                                Ok
                            </button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}