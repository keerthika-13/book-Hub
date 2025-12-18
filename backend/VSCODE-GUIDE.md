# VS Code Spring Boot Quick Start

## ✅ Extensions Installing...

The following extensions are being installed:
1. **Extension Pack for Java** - Java support
2. **Spring Boot Extension Pack** - Spring Boot support

## 🚀 How to Run the Backend (After Extensions Install)

### Method 1: Using Spring Boot Dashboard (Easiest)
1. Look at the **left sidebar** in VS Code
2. You'll see a **Spring Boot icon** (looks like a green boot)
3. Click it to open Spring Boot Dashboard
4. You'll see **book-hub** application
5. Click the **▶ Run** button next to it
6. ✅ Server starts at http://localhost:8080

### Method 2: Using Run Button (Simple)
1. Open file: `BookHubApplication.java`
2. You'll see **Run | Debug** links above the `main` method
3. Click **Run**
4. ✅ Done!

### Method 3: Using F5 (Debug Mode)
1. Press **F5** on your keyboard
2. Select **"Run Book-Hub Backend"**
3. ✅ Server starts with debugging enabled

### Method 4: Using Terminal
1. Open Terminal in VS Code (Ctrl + `)
2. Run:
   ```powershell
   cd backend
   ./mvnw.cmd spring-boot:run
   ```

## 🧪 Test the Backend

Once running, open your browser:
- http://localhost:8080/api/books
- http://localhost:8080/h2-console

## 🔗 Connect to Frontend

Your React frontend at http://localhost:3000 will automatically connect!

## ⏹️ Stop the Server

- Click the **red square (■)** button in VS Code terminal
- Or press **Ctrl + C** in terminal

---

**Wait for extensions to finish installing, then use Method 1 or 2!**
