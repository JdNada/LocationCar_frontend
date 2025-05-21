📘 Car Location – Full Stack Project
This is a full-stack application for managing cars and their locations.
Built with:

✅ Backend: Spring Boot (Java)

✅ Frontend: Angular 17

✅ Database: MySQL

📁 Project Structure

car_location_backend/        <- Spring Boot backend
car_location_frontend/       <- Angular 17 frontend

🚀 Backend (Spring Boot)
▶️ Run
cd car_location_backend
./mvnw spring-boot:run
🌐 API Endpoints
Method	Endpoint	Description
POST	/api/cars	Add a new car
GET	/api/cars	Get all cars
GET	/api/cars/{id}	Get car by ID
PUT	/api/cars/{id}	Update car
DELETE	/api/cars/{id}	Delete car
POST	/api/locations	Add new location
GET	/api/locations/car/{id}/current	Get car's current location
GET	/api/locations/car/{id}/history	Get location history

🔐 CORS
CORS is enabled for Angular (port 4200) via a WebConfig.java class.

🧩 Frontend (Angular 17)
▶️ Install and Run

cd car_location_frontend
npm install
ng serve --proxy-config proxy.conf.json
Then visit: http://localhost:4200

📦 Features
View list of cars

Add / update / delete cars

View a car’s current location

View historical locations

🔁 Proxy Configuration 
proxy.conf.json file forwards /api requests to Spring Boot:

json
Copier
Modifier
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false
  }
}
Run Angular with:


ng serve --proxy-config proxy.conf.json
🛠 Technologies
Layer	Stack
Backend	Spring Boot, Maven
Frontend	Angular 17, TypeScript, SCSS
UI	HTML, CSS (Dark theme)
API Client	Angular HttpClient
Styling	SCSS with modern layout

