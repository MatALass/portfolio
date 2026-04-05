# Run this ONCE from the root of your portfolio project
# Downloads WOFF2 font files from fontsource (reliable, open source CDN)
# Then self-hosts them — eliminates Google Fonts render-blocking

$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "public/fonts" | Out-Null

$fonts = @(
    # Playfair Display
    @{ file = "playfair-display-latin-400-normal.woff2";   url = "https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5/files/playfair-display-latin-400-normal.woff2" },
    @{ file = "playfair-display-latin-500-normal.woff2";   url = "https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5/files/playfair-display-latin-500-normal.woff2" },
    @{ file = "playfair-display-latin-400-italic.woff2";   url = "https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5/files/playfair-display-latin-400-italic.woff2" },
    @{ file = "playfair-display-latin-500-italic.woff2";   url = "https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5/files/playfair-display-latin-500-italic.woff2" },
    # DM Sans
    @{ file = "dm-sans-latin-300-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files/dm-sans-latin-300-normal.woff2" },
    @{ file = "dm-sans-latin-400-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files/dm-sans-latin-400-normal.woff2" },
    @{ file = "dm-sans-latin-500-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files/dm-sans-latin-500-normal.woff2" },
    @{ file = "dm-sans-latin-700-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files/dm-sans-latin-700-normal.woff2" },
    # DM Mono
    @{ file = "dm-mono-latin-400-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-mono@5/files/dm-mono-latin-400-normal.woff2" },
    @{ file = "dm-mono-latin-500-normal.woff2";            url = "https://cdn.jsdelivr.net/npm/@fontsource/dm-mono@5/files/dm-mono-latin-500-normal.woff2" }
)

foreach ($font in $fonts) {
    $dest = "public/fonts/$($font.file)"
    if (Test-Path $dest) {
        Write-Host "Already exists: $($font.file)"
        continue
    }
    Write-Host "Downloading $($font.file)..."
    Invoke-WebRequest -Uri $font.url -OutFile $dest
    Write-Host "  Saved $('{0:N0}' -f (Get-Item $dest).Length) bytes"
}

Write-Host ""
Write-Host "All fonts downloaded to public/fonts/"
Write-Host "Count: $((Get-ChildItem public/fonts/*.woff2).Count) WOFF2 files"
