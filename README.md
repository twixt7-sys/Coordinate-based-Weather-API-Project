# Weather Dashboard - Final Project

## Overview
A simple web application that uses Open-Meteo API to fetch current weather, stores it via PHP into MySQL, and displays saved data.

## Tech Stack
- HTML, CSS, JS (fetch API)
- PHP for backend
- MySQL for storage
- Open-Meteo public API

## Setup
1. Import `sql/weather_db.sql` into MySQL.
2. Set up a local PHP server (`xampp`, `laragon`, etc.).
3. Access via `localhost/weather-dashboard/frontend/index.html`.

## Team
- Bloo + Partner Name

## Screenshots
*(add screenshots here)*

# Weather Dashboard

A simple web application to search, save, and view weather data using the [Open-Meteo API](https://open-meteo.com/), with data storage in MySQL and backend support in both PHP and Flask.

---

## 🌦️ Features

- Search current weather by latitude and longitude
- Save weather records to a database
- View and delete saved weather records
- Responsive, modern UI (Bootstrap)
- Two backend implementations: PHP (for classic frontend) and Flask (for modern SPA)

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Axios
- **Backend:** Python Flask (modern)
- **Database:** MySQL
- **API:** Open-Meteo public API

---

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Database Setup

1. Open your MySQL client (phpMyAdmin, CLI, etc.).
2. Import the SQL schema:

   ```sql
   SOURCE frontend/db/weather_db.sql;
   ```

   This creates a `weather_app` database and a `weather_data` table.

### 3. PHP Backend Setup

1. Make sure you have [XAMPP](https://www.apachefriends.org/) or similar LAMP/WAMP stack installed.
2. Place the project folder in your web root (e.g., `htdocs` for XAMPP).
3. Start Apache and MySQL from your control panel.
4. Access the classic frontend at:  
   [http://localhost/IT111project/frontend/index.htm](http://localhost/IT111project/frontend/index.htm)

### 4. Flask Backend Setup (Optional)

1. Install Python 3 and pip.
2. Install dependencies:

   ```sh
   pip install flask flask-cors mysql-connector-python
   ```

3. Run the Flask app:

   ```sh
   cd flask_app
   python app.py
   ```

4. Access the modern frontend at:  
   [http://localhost:5000/](http://localhost:5000/)

---

## 📂 Project Structure

```
IT111project/
│
├── flask_app/
│   ├── app.py
│   ├── static/js/
│   │   ├── main.js
│   │   └── saved.js
│   └── templates/
│       ├── index.html
│       ├── saved.html
│       └── search.html
│
├── frontend/
│   ├── index.htm
│   ├── saved.htm
│   ├── search.htm
│   ├── backend/
│   │   ├── db.php
│   │   ├── get_saved_weather.php
│   │   ├── save_weather.php
│   │   └── delete_weather.php
│   ├── css/
│   └── db/
│       └── weather_db.sql
│
├── .gitattributes
└── README.md
```

---

## ⚙️ Configuration

- **Database credentials** are set in:
  - [`frontend/backend/db.php`](frontend/backend/db.php)
  - [`flask_app/app.py`](flask_app/app.py) (`db_config` dictionary)

- **API Endpoint:**  
  Uses [Open-Meteo](https://open-meteo.com/) for weather data.

---

## 🖥️ Usage

### Search Weather

1. Enter latitude and longitude.
2. Click "Search" to fetch current weather.

### Save Weather

- After searching, click "Save Weather" to store the result in the database.

### View Saved Weather

- Click "View Saved Weather" to see all saved records.
- You can delete records from this view.

---

## 👥 Team

- Twixt Jasley Tamera
- Kencharviz Alao
- Katrine Angelica Jimenez

---