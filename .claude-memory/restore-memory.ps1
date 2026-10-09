# Gendanner 7am AI's Claude-memory efter git clone (fx paa en ny computer).
# Kopierer memory-filerne til Claude Codes memory-mappe og TILFOEJER manglende linjer til
# MEMORY.md der. Overskriver aldrig et eksisterende MEMORY.md, saa anden memory bevares.
# Koer: powershell -ExecutionPolicy Bypass -File .claude-memory\restore-memory.ps1

$username = $env:USERNAME
$sanitized = "C:\Users\$username" -replace "\\", "-" -replace ":", ""
$memoryTarget = "C:\Users\$username\.claude\projects\$sanitized\memory"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

New-Item -ItemType Directory -Force $memoryTarget | Out-Null

Get-ChildItem "$scriptDir\*.md" | Where-Object { $_.Name -ne "MEMORY.md" } | ForEach-Object {
    Copy-Item $_.FullName $memoryTarget -Force
    Write-Host "Gendannet: $($_.Name)"
}

$targetIndex = Join-Path $memoryTarget "MEMORY.md"
if (-not (Test-Path $targetIndex)) { Set-Content -Path $targetIndex -Value "# Memory Index`r`n" -Encoding utf8 }
$existing = Get-Content $targetIndex -Encoding utf8
# .StartsWith/.Contains i stedet for -like, fordi [ er et wildcard-tegn i -like.
Get-Content (Join-Path $scriptDir "MEMORY.md") -Encoding utf8 | Where-Object { $_.StartsWith("- [") } | ForEach-Object {
    $file = (($_ -split "\]\(")[1] -split "\)")[0]
    if (-not ($existing | Where-Object { $_.Contains("]($file)") })) {
        Add-Content -Path $targetIndex -Value $_ -Encoding utf8
        Write-Host "Tilfoejet til MEMORY.md: $file"
    }
}

Write-Host ""
Write-Host "7am AI-memory er gendannet under: $memoryTarget"
