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
        <div className="mb-16 relative border border-white rounded-3xl bg-[rgba(104,104,104,0.2)] text-white w-[300px] xl:w-[320px] 2xl:w-[416px] mx-auto">
            <h3 className="text-xl 2xl:text-2xl font-light mb-4 pt-6 pb-2 px-4">{title}</h3>
            <div className="w-full border border-white "></div>
            <div className="relative w-full mt-20">
                <div className="absolute bottom-12 left-9 xl:left-7 w-[220px] xl:w-[250px] 2xl:w-[350px] h-full rounded-3xl bg-[#757575] opacity-30 z-0" />
                <div className="absolute bottom-6 left-5 xl:left-3 w-[250px] xl:w-[280px] 2xl:w-[380px] h-full rounded-3xl bg-[#9E9D9D] opacity-30 z-0" />
                <Image
                    src={imageUrl}
                    alt={title}
                    width={416}
                    height={50}
                    className="rounded-3xl w-full relative z-10 h-[307px]"
                />
            </div>
            <button
                onClick={() => setIsOpen(true)}
                className="absolute bottom-4 right-4 bg-[#1D2939] w-20 h-20 flex items-center justify-center rounded-full shadow-lg text-white z-20"
            >
                <ArrowUpRight size={30} />
            </button>
            {/* Modal */}
            <ServiceModal title={title} description={description} open={isOpen} setOpen={setIsOpen} />
        </div>
    );
}
