// blog/LikeButtonFunction.tsx
"use server"

import fs from 'fs';
import path from 'path';

export async function getLikeCount() {
    const filePath = path.join(process.cwd(), 'data/like.txt');
    const nowLikeCount = await parseInt(fs.readFileSync(filePath, 'utf-8')) || 0;
    return nowLikeCount;
}

export async function updateLikeCount() {
    const filePath = path.join(process.cwd(), 'data/like.txt');
    const nowLikeCount = await getLikeCount();
    fs.writeFileSync(filePath, (nowLikeCount + 1).toString());
};
