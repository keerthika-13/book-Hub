# How to Run Book-Hub Backend Without Maven Command Line

Since Maven is not installed via command line, here are alternative ways to run the backend:

## Option 1: Use IntelliJ IDEA (Recommended)

1. **Open IntelliJ IDEA**
2. **Open the backend folder**: File → Open → Select `backend` folder
3. **Wait for dependencies to download** (IntelliJ has Maven built-in)
4. **Run the application**: 
   - Right-click on `BookHubApplication.java`
   - Select "Run 'BookHubApplication'"
5. **Server will start** at http://localhost:8080

## Option 2: Use VS Code with Spring Boot Extension

1. **Install Extension**: "Spring Boot Extension Pack"
2. **Open backend folder** in VS Code
3. **Press F5** or click "Run" → "Start Debugging"
4. **Select**: "Spring Boot App"

## Option 3: Use Eclipse

1. **Open Eclipse**
2. **Import Project**: File → Import → Maven → Existing Maven Projects
3. **Select backend folder**
4. **Right-click project** → Run As → Spring Boot App

## Option 4: Install Maven Manually

### Download Maven:
1. Go to: https://maven.apache.org/download.cgi
2. Download: `apache-maven-3.9.6-bin.zip`
3. Extract to: `C:\Program Files\apache-maven-3.9.6`
4. Add to PATH:
   - Search "Environment Variables" in Windows
   - Edit "Path" variable
   - Add: `C:\Program Files\apache-maven-3.9.6\bin`
5. Restart PowerShell
6. Run: `mvn clean install -DskipTests`

## Option 5: Use Windows Terminal as Administrator

1. **Right-click Windows Terminal** → Run as Administrator
2. Run: `choco install maven -y`
3. Restart terminal
4. Navigate to backend folder
5. Run: `mvn spring-boot:run`

## Quick Test After Starting:

Open browser and visit:
- http://localhost:8080/api/books
- http://localhost:8080/h2-console

You should see the API response!

## Which IDE do you have installed?
- IntelliJ IDEA?
- Eclipse?
- VS Code?

Let me know and I can provide specific steps!
