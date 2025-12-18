# 🚀 Quick Start Guide - Book-Hub Backend

## Prerequisites Check
- [ ] Java 17+ installed (`java -version`)
- [ ] Maven installed (`mvn -version`)
- [ ] Port 8080 is available

## 1. Quick Start (Using H2 Database)

### Start the Backend Server
```bash
cd backend
mvn spring-boot:run
```

✅ Server should start at: http://localhost:8080

### Test the API
Open browser or use curl:
```bash
# Get all books
curl http://localhost:8080/api/books

# Get statistics
curl http://localhost:8080/api/home/stats

# Access H2 Console
Open: http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:bookhubdb
Username: sa
Password: (leave empty)
```

## 2. Testing API Endpoints with Sample Requests

### Create a Book
```bash
curl -X POST http://localhost:8080/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Book",
    "author": "Test Author",
    "category": "Academic",
    "type": "sell",
    "description": "A test book",
    "price": 25.99
  }'
```

### Register a User
```bash
curl -X POST http://localhost:8080/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:8080/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Search Books
```bash
curl http://localhost:8080/api/books/search?keyword=Java
```

## 3. Switch to MySQL (Production)

### Step 1: Create Database
```sql
mysql -u root -p
CREATE DATABASE bookhub;
exit;
```

### Step 2: Run Schema Script
```bash
mysql -u root -p bookhub < src/main/resources/schema.sql
```

### Step 3: Update application.yml
Uncomment MySQL configuration:
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/bookhub
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: your_password
  jpa:
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
```

### Step 4: Restart Server
```bash
mvn spring-boot:run
```

## 4. Verify Everything Works

### Check Backend Health
```bash
# Should return list of books
curl http://localhost:8080/api/books

# Should return stats
curl http://localhost:8080/api/home/stats

# Should return latest books
curl http://localhost:8080/api/home/latest-books
```

### Expected Response Format
```json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Java Programming",
      "author": "Herbert Schildt",
      "category": "Academic",
      "type": "sell",
      "description": null,
      "price": null
    }
  ]
}
```

## 5. Integration with Frontend

### Make sure:
1. Backend is running on port 8080
2. Frontend is running on port 3000
3. CORS is configured correctly (already done)

### Test from Frontend
```javascript
// In your browser console at localhost:3000
fetch('http://localhost:8080/api/books')
  .then(res => res.json())
  .then(data => console.log(data));
```

## 6. Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:8080 | xargs kill -9
```

### Maven Dependencies Not Resolved
```bash
mvn clean install -U
```

### Database Connection Failed
- Verify MySQL is running
- Check username/password
- Ensure database 'bookhub' exists

### Application Won't Start
```bash
# Clean and rebuild
mvn clean package
mvn spring-boot:run
```

## 7. Build for Production

### Create JAR file
```bash
mvn clean package -DskipTests
```

### Run JAR
```bash
java -jar target/book-hub-1.0.0.jar
```

### Run with custom port
```bash
java -jar target/book-hub-1.0.0.jar --server.port=9090
```

## 8. API Testing Tools

### Using Postman
1. Import collection from: `postman_collection.json` (create if needed)
2. Set base URL: `http://localhost:8080`
3. Test all endpoints

### Using curl (Already shown above)

### Using Browser Extensions
- REST Client for VS Code
- Talend API Tester
- Thunder Client

## 9. Development Tips

### Hot Reload
Add Spring DevTools dependency (already included):
- Code changes auto-reload
- No need to restart server

### Logging
Check logs in console:
```bash
# Shows SQL queries
logging.level.org.hibernate.SQL=DEBUG
```

### H2 Console Access
- URL: http://localhost:8080/h2-console
- Test queries directly in browser

## 10. Next Steps

✅ Backend is ready!

Now integrate with frontend:
1. Start frontend: `cd frontend && npm start`
2. Test book creation from UI
3. Test user registration
4. Verify data persistence

## 📚 Additional Resources

- Spring Boot Docs: https://spring.io/projects/spring-boot
- Spring Data JPA: https://spring.io/projects/spring-data-jpa
- H2 Database: https://www.h2database.com/
- MySQL: https://dev.mysql.com/doc/

---

**Backend Setup Complete! 🎉**
