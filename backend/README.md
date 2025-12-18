# Book-Hub Backend

A comprehensive Spring Boot REST API for the Book-Hub application - a platform for sharing, exchanging, and discovering books.

## 🚀 Technologies Used

- **Spring Boot 3.2.0** - Main framework
- **Spring Data JPA** - Database access layer
- **Hibernate** - ORM framework
- **H2 Database** - In-memory database (development)
- **MySQL** - Production database (configurable)
- **Spring Security** - Authentication and authorization
- **BCrypt** - Password encryption
- **Maven** - Dependency management
- **Lombok** - Reduce boilerplate code

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+ (for production, optional for development)
- Your favorite IDE (IntelliJ IDEA, Eclipse, VS Code)

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
cd backend
```

### 2. Configure Database

#### For Development (H2 Database - Default)
The application is pre-configured to use H2 in-memory database. No additional setup required.

#### For Production (MySQL)
1. Install and start MySQL
2. Create a database:
   ```sql
   CREATE DATABASE bookhub;
   ```
3. Update `src/main/resources/application.yml`:
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

### 3. Install Dependencies
```bash
mvn clean install
```

### 4. Run the Application
```bash
mvn spring-boot:run
```

The server will start on `http://localhost:8080`

### 5. Access H2 Console (Development Only)
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:bookhubdb`
- Username: `sa`
- Password: (leave empty)

## 📚 API Endpoints

### Book Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/{id}` | Get book by ID |
| POST | `/api/books` | Create new book |
| PUT | `/api/books/{id}` | Update book |
| DELETE | `/api/books/{id}` | Delete book |
| GET | `/api/books/category/{category}` | Get books by category |
| GET | `/api/books/type/{type}` | Get books by type (sell/rent/donate) |
| GET | `/api/books/search?keyword={keyword}` | Search books by title/author |

### User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| DELETE | `/api/users/{id}` | Delete user |

### Home/Stats

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/home/stats` | Get dashboard statistics |
| GET | `/api/home/latest-books` | Get latest 4 books |

## 📝 Sample API Requests

### Create a Book
```json
POST /api/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "category": "Academic",
  "type": "rent",
  "description": "A handbook of agile software craftsmanship",
  "price": 29.99
}
```

### Register a User
```json
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### Login
```json
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/bookhub/
│   │   │   ├── config/          # Configuration classes
│   │   │   │   ├── DataLoader.java
│   │   │   │   └── WebConfig.java
│   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── BookController.java
│   │   │   │   ├── HomeController.java
│   │   │   │   └── UserController.java
│   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── ApiResponse.java
│   │   │   │   ├── BookDTO.java
│   │   │   │   ├── LoginRequest.java
│   │   │   │   └── UserDTO.java
│   │   │   ├── entity/          # JPA entities
│   │   │   │   ├── Book.java
│   │   │   │   └── User.java
│   │   │   ├── exception/       # Custom exceptions
│   │   │   │   ├── BadRequestException.java
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   └── ResourceNotFoundException.java
│   │   │   ├── repository/      # JPA repositories
│   │   │   │   ├── BookRepository.java
│   │   │   │   └── UserRepository.java
│   │   │   ├── security/        # Security configuration
│   │   │   │   └── SecurityConfig.java
│   │   │   ├── service/         # Business logic
│   │   │   │   ├── BookService.java
│   │   │   │   └── UserService.java
│   │   │   └── BookHubApplication.java  # Main class
│   │   └── resources/
│   │       └── application.yml  # Configuration file
│   └── test/                    # Test classes
├── pom.xml                      # Maven dependencies
└── README.md
```

## 🔒 Security Features

- Password encryption using BCrypt
- CORS configuration for frontend integration
- Input validation using Bean Validation
- Global exception handling
- SQL injection prevention through JPA

## 🧪 Testing

Run tests using:
```bash
mvn test
```

## 🚀 Deployment

### Building for Production
```bash
mvn clean package -DskipTests
```

The JAR file will be created in the `target` directory.

### Running the JAR
```bash
java -jar target/book-hub-1.0.0.jar
```

## 📊 Database Schema

### Books Table
- `id` (Long, Primary Key, Auto-increment)
- `title` (String, Not Null)
- `author` (String, Not Null)
- `category` (String, Not Null)
- `type` (String, Not Null) - Values: sell, rent, donate
- `description` (String, 1000 chars)
- `price` (Double, Nullable)

### Users Table
- `id` (Long, Primary Key, Auto-increment)
- `name` (String, Not Null)
- `email` (String, Unique, Not Null)
- `password` (String, Encrypted, Not Null)
- `created_at` (DateTime)

## 🛠️ Configuration Options

### application.yml Properties

```yaml
# Server Port
server.port: 8080

# Database
spring.datasource.url: jdbc:h2:mem:bookhubdb
spring.jpa.hibernate.ddl-auto: update

# Logging
logging.level.com.bookhub: DEBUG
```

## 🤝 Integration with Frontend

The backend is configured to accept requests from `http://localhost:3000` (React frontend).

Make sure both applications are running:
- Backend: `http://localhost:8080`
- Frontend: `http://localhost:3000`

## 📈 Future Enhancements

- [ ] JWT-based authentication
- [ ] File upload for book covers
- [ ] Advanced search with filters
- [ ] Book reviews and ratings
- [ ] Email notifications
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] API documentation with Swagger

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 8080 (Windows)
netstat -ano | findstr :8080

# Kill the process
taskkill /PID <process-id> /F
```

### Database Connection Issues
- Verify MySQL is running
- Check database credentials in application.yml
- Ensure database exists

### Maven Build Fails
```bash
# Clean and rebuild
mvn clean install -U
```

## 📞 Contact

For issues or questions, please create an issue in the repository.

## 📄 License

This project is open source and available for educational purposes.
