$files = Get-ChildItem -Path src -Recurse -Include *.ts,*.tsx,*.js,*.jsx
$pattern = "from\s+['`"]([^'`"]+)['`"]"
$packages = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($content, $pattern)
    foreach ($match in $matches) {
        $importPath = $match.Groups[1].Value
        if (-not $importPath.StartsWith(".") -and -not $importPath.StartsWith("/")) {
            $packages += $importPath
        }
    }
}

$packages | Sort-Object -Unique
