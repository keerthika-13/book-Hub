@echo off
echo ========================================
echo Book-Hub Backend Setup Script
echo ========================================
echo.

echo Step 1: Checking Java installation...
java -version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Java is not installed!
    echo Please install Java 17 or higher from: https://www.oracle.com/java/technologies/downloads/
    pause
    exit /b 1
)
echo Java is installed!
echo.

echo Step 2: Checking Maven installation...
mvn -version
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Maven is NOT installed!
    echo.
    echo Please choose an option:
    echo   1. Install Maven using Admin PowerShell: choco install maven -y
    echo   2. Use IntelliJ IDEA (has built-in Maven)
    echo   3. Use Eclipse (has built-in Maven)
    echo   4. Download manually from: https://maven.apache.org/download.cgi
    echo.
    pause
    exit /b 1
)
echo Maven is installed!
echo.

echo Step 3: Building the project...
call mvn clean install -DskipTests
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo Build successful!
echo.

echo Step 4: Starting the server...
echo Server will start at: http://localhost:8080
echo Press Ctrl+C to stop the server
echo.
call mvn spring-boot:run
