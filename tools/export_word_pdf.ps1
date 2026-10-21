param([Parameter(Mandatory=$true)][string]$Source, [Parameter(Mandatory=$true)][string]$Output)
$sourcePath = (Resolve-Path -LiteralPath $Source).Path
$outputPath = [System.IO.Path]::GetFullPath((Join-Path (Get-Location).Path $Output))
$wordApp = New-Object -ComObject Word.Application
$wordApp.Visible = $false
$wordApp.DisplayAlerts = 0
try {
    $wordDoc = $wordApp.Documents.Open($sourcePath, $false, $true)
    $wordDoc.ExportAsFixedFormat($outputPath, 17)
    $wordDoc.Close($false)
} finally { $wordApp.Quit() }
Write-Output $outputPath
