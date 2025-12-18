# 📚 Book-Hub - Book Exchange & Sharing Platform

A full-stack web application for sharing, exchanging, and discovering books. Users can sell, rent, or donate books to build a community-driven learning platform.

## 🌟 Features

- **Browse Books**: View all available books with categories (Academic, Novel, Motivation)
- **Book Types**: Support for Sell, Rent, and Donate options
- **Search & Filter**: Search books by title/author and filter by category
- **Add Books**: Users can add their own books to the platform
- **User Authentication**: Register and login functionality
- **Responsive Design**: Mobile-friendly interface
- **Real-time Statistics**: Dashboard showing total books, users, exchanges, and donations

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling
- **Fetch API** - HTTP requests

### Backend
- **Spring Boot 3.2.0** - Java framework
- **Spring Data JPA** - Data persistence
- **Hibernate** - ORM
- **Spring Security** - Authentication
- **H2/MySQL** - Database
- **Maven** - Build tool

## 📁 Project Structure

```
Book-Hub/
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images and static files
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS files
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
└── backend/                 # Spring Boot application
    ├── src/
    │   ├── main/
    │   │   ├── java/com/bookhub/
    │   │   │   ├── config/
    │   │   │   ├── controller/
    │   │   │   ├── dto/
    │   │   │   ├── entity/
    │   │   │   ├── exception/
    │   │   │   ├── repository/
    │   │   │   ├── security/
    │   │   │   ├── service/
    │   │   │   └── BookHubApplication.java
    │   │   └── resources/
    │   │       └── application.yml
    │   └── test/
    ├── pom.xml
    └── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ and npm
- **Java** 17+
- **Maven** 3.6+
- **MySQL** 8.0+ (optional, H2 is used by default)

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. The backend will start on `http://localhost:8080`

4. Access H2 Console (development): `http://localhost:8080/h2-console`
   - JDBC URL: `jdbc:h2:mem:bookhubdb`
   - Username: `sa`
   - Password: (leave empty)

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The frontend will start on `http://localhost:3000`

## 🔌 API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/{id}` - Get book by ID
- `POST /api/books` - Create new book
- `PUT /api/books/{id}` - Update book
- `DELETE /api/books/{id}` - Delete book
- `GET /api/books/category/{category}` - Get books by category
- `GET /api/books/type/{type}` - Get books by type
- `GET /api/books/search?keyword={keyword}` - Search books

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `DELETE /api/users/{id}` - Delete user

### Home/Stats
- `GET /api/home/stats` - Get dashboard statistics
- `GET /api/home/latest-books` - Get latest 4 books

## 📊 Database Schema

### Books
- id (Primary Key)
- title
- author
- category (Academic, Novel, Motivation)
- type (sell, rent, donate)
- description
- price

### Users
- id (Primary Key)
- name
- email (Unique)
- password (Encrypted)
- created_at

## 🎨 Screenshots

### Home Page
- Hero section with call-to-action
- Statistics dashboard
- Latest books section
- Community features

### Books Page
- Grid layout of all books
- Category filters
- Search functionality
- Book details modal

### Add Book Page
- Form to add new books
- Category and type selection
- Validation

### Authentication
- Register new users
- Login functionality
- Password encryption

## 🔒 Security Features

- Password encryption using BCrypt
- CORS configuration
- Input validation
- SQL injection prevention
- Global exception handling

## 🧪 Testing

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Build for Production

### Backend
```bash
cd backend
mvn clean package -DskipTests
```
Output: `target/book-hub-1.0.0.jar`

### Frontend
```bash
cd frontend
npm run build
```
Output: `build/` directory

## 🚀 Deployment

### Backend Deployment
```bash
java -jar target/book-hub-1.0.0.jar
```

### Frontend Deployment
Deploy the `build/` folder to services like:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## 🔧 Configuration

### Database Configuration (Backend)

**For Development (H2):**
Default configuration in `application.yml`

**For Production (MySQL):**
Update `application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/bookhub
    username: root
    password: your_password
```

### CORS Configuration
Update allowed origins in:
- Backend: `SecurityConfig.java` and `WebConfig.java`
- Frontend: Update API base URL in service files

## 🐛 Troubleshooting

### Backend Issues
- **Port 8080 in use**: Change port in `application.yml`
- **Database errors**: Check MySQL connection or use H2
- **Maven build fails**: Run `mvn clean install -U`

### Frontend Issues
- **Port 3000 in use**: Update port with `PORT=3001 npm start`
- **API connection fails**: Verify backend is running on port 8080
- **Dependencies error**: Delete `node_modules` and run `npm install`

## 📈 Future Enhancements

- [ ] JWT authentication with tokens
- [ ] Book cover image uploads
- [ ] User profile management
- [ ] Book reviews and ratings
- [ ] Messaging between users
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Advanced filters
- [ ] Wishlist functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Created as a full-stack learning project demonstrating:
- RESTful API design
- React component architecture
- Spring Boot best practices
- Database design and ORM
- Authentication and security
- Responsive web design

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Check existing documentation in README files
- Review API endpoints and sample requests

---

**Happy Coding! 🚀📚**
