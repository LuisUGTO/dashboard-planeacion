param([switch]$SoloInforme,[string]$Carpeta='D:\Proyectos\dashboard-planeacion\entregables\revision_ejecutiva_2026-10-21',[string]$CarpetaQA='D:\Proyectos\dashboard-planeacion\tmp\revision-marce-20261021\office-render')
$ErrorActionPreference = 'Stop'
$taskFolder = $Carpeta
$taskQa = $CarpetaQA
New-Item -ItemType Directory -Path $taskQa -Force | Out-Null
$taskWord = $null
$taskDoc = $null
try {
    $taskWord = New-Object -ComObject Word.Application
    $taskWord.Visible = $false
    $taskWord.DisplayAlerts = 0
    $taskDoc = $taskWord.Documents.Open((Join-Path $taskFolder 'Informe_Ejecutivo_Captura_y_Calidad_2026-10-21.docx'), $false, $true)
    $taskDoc.Repaginate()
    $taskDoc.ExportAsFixedFormat((Join-Path $taskFolder 'Informe_Ejecutivo_Captura_y_Calidad_2026-10-21.pdf'),17)
    Write-Output ('Informe exportado. Paginas: ' + $taskDoc.ComputeStatistics(2))
} finally {
    if ($null -ne $taskDoc) { $taskDoc.Close(0); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskDoc) }
    if ($null -ne $taskWord) { $taskWord.Quit(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskWord) }
}
if ($SoloInforme) { return }
$taskPpt = $null
$taskDeck = $null
$taskPptWasOpen = $null -ne (Get-Process -Name POWERPNT -ErrorAction SilentlyContinue)
try {
    $taskPpt = New-Object -ComObject PowerPoint.Application
    $taskDeck = $taskPpt.Presentations.Open((Join-Path $taskFolder 'Presentacion_Ejecutiva_Captura_y_Calidad_2026-10-21_FINAL.pptx'), -1, 0, 0)
    $taskDeck.SaveAs((Join-Path $taskFolder 'Presentacion_Ejecutiva_Captura_y_Calidad_2026-10-21.pdf'),32)
    $taskDeck.Export($taskQa,'PNG',1600,900)
    Write-Output ('Presentacion exportada. Laminas: ' + $taskDeck.Slides.Count)
} finally {
    if ($null -ne $taskDeck) { $taskDeck.Close(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskDeck) }
    if ($null -ne $taskPpt) {
        if (-not $taskPptWasOpen) { $taskPpt.Quit() }
        [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskPpt)
    }
}
