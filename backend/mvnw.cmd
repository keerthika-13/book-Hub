@echo off
@REM Apache Maven Wrapper startup script for Windows
@REM This allows you to run Maven without installing it

set MAVEN_VERSION=3.9.6
set MAVEN_HOME=%USERPROFILE%\.m2\wrapper\apache-maven-%MAVEN_VERSION%

if not exist "%MAVEN_HOME%" (
    echo Downloading Maven...
    mkdir "%USERPROFILE%\.m2\wrapper" 2>nul
    powershell -Command "Invoke-WebRequest -Uri 'https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip' -OutFile '%USERPROFILE%\.m2\apache-maven.zip'"
    powershell -Command "Expand-Archive -Path '%USERPROFILE%\.m2\apache-maven.zip' -DestinationPath '%USERPROFILE%\.m2\wrapper' -Force"
    del "%USERPROFILE%\.m2\apache-maven.zip"
)

"%MAVEN_HOME%\bin\mvn.cmd" %*
