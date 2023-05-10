"use client";

import "@/scss/pages/error.scss";

export default function Error({ reset }: { reset(): void }) {
    return (
        <>
            <p>Oops! Something went wrong</p>
            <button onClick={() => reset()} className="green-btn">
                Try again
            </button>
        </>
    );
}
