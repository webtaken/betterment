"use server";
import { list } from "@vercel/blob";

export async function allVideos() {
  const blobs = await list();
  return blobs.blobs.filter((b) => b.pathname.endsWith(".mp4"));
}
