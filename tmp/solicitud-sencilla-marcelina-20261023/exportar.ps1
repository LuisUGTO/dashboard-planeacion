$ErrorActionPreference = 'Stop'
$taskFolder = 'D:\Proyectos\dashboard-planeacion\entregables\solicitud_marcelina_2026-10-23'
$taskWord = $null
$taskDoc = $null
try {
    $taskWord = New-Object -ComObject Word.Application
    $taskWord.Visible = $false
    $taskWord.DisplayAlerts = 0
    $taskDoc = $taskWord.Documents.Open((Join-Path $taskFolder 'Solicitud_Informacion_Marcelina_Enero_Agosto_2026.docx'), $false, $true)
    $taskDoc.Repaginate()
    $taskDoc.ExportAsFixedFormat((Join-Path $taskFolder 'Solicitud_Informacion_Marcelina_Enero_Agosto_2026.pdf'), 17)
    Write-Output ('Paginas: ' + $taskDoc.ComputeStatistics(2))
} finally {
    if ($null -ne $taskDoc) { $taskDoc.Close(0); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskDoc) }
    if ($null -ne $taskWord) { $taskWord.Quit(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($taskWord) }
}
