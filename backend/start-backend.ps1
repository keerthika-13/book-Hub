# Simple Spring Boot Starter Script
# This will try to run the application without Maven

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Book-Hub Backend Starter" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set location
Set-Location "c:\Users\keert\Downloads\Java developer\Book-Hub\backend"

# Check if VS Code Java extensions are loaded
Write-Host "Checking VS Code Java Extensions..." -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANT: For VS Code to run Spring Boot, you need:" -ForegroundColor Green
Write-Host "  1. Extension Pack for Java (vscjava.vscode-java-pack)" -ForegroundColor White
Write-Host "  2. Spring Boot Extension Pack (vmware.vscode-boot-dev-pack)" -ForegroundColor White
Write-Host ""
Write-Host "After extensions install:" -ForegroundColor Green
Write-Host "  1. Open: BookHubApplication.java" -ForegroundColor White
Write-Host "  2. Look for 'Run | Debug' text above main method" -ForegroundColor White
Write-Host "  3. Click 'Run'" -ForegroundColor White
Write-Host ""

# Alternative: Try to find and use Maven wrapper or Maven
if (Test-Path "mvnw.cmd") {
    Write-Host "Found Maven wrapper, attempting to run..." -ForegroundColor Yellow
    .\mvnw.cmd spring-boot:run
} else {
    Write-Host "Maven wrapper not found." -ForegroundColor Red
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "HOW TO RUN THE BACKEND:" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "OPTION 1 (Easiest): Use IntelliJ IDEA" -ForegroundColor Green
    Write-Host "  1. Open IntelliJ IDEA" -ForegroundColor White
    Write-Host "  2. File > Open > Select 'backend' folder" -ForegroundColor White
    Write-Host "  3. Wait for dependencies to download" -ForegroundColor White
    Write-Host "  4. Right-click BookHubApplication.java > Run" -ForegroundColor White
    Write-Host ""
    Write-Host "OPTION 2: Install Maven" -ForegroundColor Green
    Write-Host "  Run PowerShell as Administrator:" -ForegroundColor White
    Write-Host "  choco install maven -y" -ForegroundColor Yellow
    Write-Host "  Then run: mvn spring-boot:run" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "OPTION 3: Use VS Code (after extensions install)" -ForegroundColor Green
    Write-Host "  1. Wait for Java extensions to finish installing" -ForegroundColor White
    Write-Host "  2. Open BookHubApplication.java" -ForegroundColor White
    Write-Host "  3. Click 'Run' above the main method" -ForegroundColor White
    Write-Host ""
}

Read-Host "Press Enter to exit"
