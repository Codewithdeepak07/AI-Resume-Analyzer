/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes The size in bytes
 * @returns A formatted string with the appropriate unit
 */
import * as crypto from "node:crypto";

export function formatSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];

    // Determine the appropriate unit by calculating the log
    const i: number = Math.floor(Math.log(bytes) / Math.log(k));

    // Format with 2 decimal places and round
    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
}


// utils.tsx

export function generateUUID(): string {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    // Fallback for older environments
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

