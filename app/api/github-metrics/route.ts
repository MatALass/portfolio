// app/api/github-metrics/route.ts
import { NextResponse } from "next/server";

const USERNAME = "MatALass";

async function gh(url: string) {
  const headers: Record<string, string> = {
    "User-Agent": "final_portfolio",
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers, cache: "no-store" });
  if (!res.ok) throw new Error(`GitHub error ${res.status}`);
  return res.json();
}

export async function GET() {
  try {
    const user = await gh(`https://api.github.com/users/${USERNAME}`);
    const repos = await gh(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`
    );

    const lastPush =
      repos
        .map((r: any) => r.pushed_at)
        .filter(Boolean)
        .sort()
        .slice(-1)[0] ?? null;

    const now = Date.now();
    const DAYS_30 = 30 * 24 * 60 * 60 * 1000;

    const activeRepos30d = repos.filter((r: any) => {
      const pushed = r.pushed_at ? new Date(r.pushed_at).getTime() : 0;
      return pushed > now - DAYS_30;
    }).length;

    const daysSinceLastPush = lastPush
      ? Math.floor(
          (now - new Date(lastPush).getTime()) / (24 * 60 * 60 * 1000)
        )
      : null;

    return NextResponse.json({
      username: user.login,
      profileUrl: user.html_url,

      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,

      lastPush,
      activeRepos30d,
      daysSinceLastPush,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}