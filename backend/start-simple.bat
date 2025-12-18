@echo off
echo ========================================
echo Starting Book-Hub Backend Server
echo ========================================
echo.

cd /d "%~dp0"

echo Checking Java installation...
java -version
if errorlevel 1 (
    echo ERROR: Java not found!
    pause
    exit /b 1
)

echo.
echo Compiling Java files...
if not exist "target\classes" mkdir "target\classes"

javac -d target/classes -cp "src/main/java" src/main/java/com/bookhub/BookHubApplication.java src/main/java/com/bookhub/entity/*.java src/main/java/com/bookhub/repository/*.java src/main/java/com/bookhub/service/*.java src/main/java/com/bookhub/controller/*.java src/main/java/com/bookhub/dto/*.java src/main/java/com/bookhub/exception/*.java src/main/java/com/bookhub/config/*.java src/main/java/com/bookhub/security/*.java

if errorlevel 1 (
    echo.
    echo ERROR: Compilation failed!
    echo This project requires Maven or IDE to run properly.
    echo.
    echo Please do ONE of these:
    echo   1. Open the 'backend' folder in IntelliJ IDEA
    echo   2. Right-click BookHubApplication.java and click 'Run'
    echo   OR
    echo   3. Install Maven and run: mvn spring-boot:run
    echo.
    pause
    exit /b 1
)

echo.
echo Compilation successful!
echo Starting server...
java -cp target/classes com.bookhub.BookHubApplication

pause
