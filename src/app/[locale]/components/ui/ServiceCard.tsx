"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ServiceModal from "./ServiceModal";

interface ServiceCardProps {
    title: string;
    imageUrl: string;
    description: string;
}

export default function ServiceCard({ title, imageUrl, description }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Card Principal */}
            <div className=" w-auto h-96 bg-transparent text-white rounded-xl shadow-lg overflow-hidden gap-4">
                {/* Título */}
                <h3 className=" text-2xl font-medium text-left">{title}</h3>
                {/* Contenedor de la imagen con recorte */}
                <div className=" ">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={416}
                        height={208}
                        className="rounded-lg w-full"
                    />
                </div>

                {/* Botón con la flecha */}
                <button
                    onClick={() => setIsOpen(true)}
                    className=" bg-gray-900 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white z-20"
                >
                    <ArrowUpRight size={20} />
                </button>
            </div>

            {/* Modal (se abre cuando isOpen es true) */}
            <ServiceModal title={title} description={description} open={isOpen} setOpen={setIsOpen} />
        </div>
    );
}
