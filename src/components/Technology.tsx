import type { Technology as T } from "@/sanity/types";
import Image from "next/image";

export default function Technology({ image, color, name }: Omit<T, "id">) {
    return (
        <li className="technology">
            <div
                className="technology__icon"
                style={{
                    backgroundColor: color + "30",
                }}
            >
                <Image src={image} alt={name} width={22} height={22} />
            </div>
            <p className="technology__name">{name}</p>
        </li>
    );
}
