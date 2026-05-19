"use client";

import { useCallback, useState } from "react";
import { IoShareSocialOutline, IoCheckmark } from "react-icons/io5";

const ShareProjectButton = ({ title, url }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = useCallback(async () => {
        const shareData = {
            title,
            url,
            text: `Check out this project: ${title}`,
        };

        if (typeof navigator !== "undefined" && navigator.share) {
            try {
                await navigator.share(shareData);
                return;
            } catch {
                /* fall through to clipboard */
            }
        }

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* ignore */
        }
    }, [title, url]);

    return (
        <button
            type="button"
            onClick={handleShare}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#212428] hover:bg-[#262a2e] text-[#c4cfde] px-4 py-2.5 text-sm font-medium transition-colors"
        >
            {copied ? (
                <>
                    <IoCheckmark className="text-lg text-primary" />
                    Link copied!
                </>
            ) : (
                <>
                    <IoShareSocialOutline className="text-lg" />
                    Share Project
                </>
            )}
        </button>
    );
};

export default ShareProjectButton;
