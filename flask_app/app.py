from flask import Flask, request, jsonify, render_template
import mysql.connector
from flask_cors import CORS

db_config = {
	"host": "127.0.0.1",
	"user": "root",
	"password": "",
	"database": "weather_app"
}

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/saved')
def saved():
    return render_template('saved.html')

@app.route('/search')
def search():
    return render_template('search.html')

@app.route("/db")
def db_test():
	try:
		conn = mysql.connector.connect(**db_config)
		cursor = conn.cursor()
		cursor.execute("SELECT * FROM weather_data LIMIT 5")  # adjust to your table
		rows = cursor.fetchall()
		cursor.close()
		conn.close()
		return str(rows)
	except Exception as e:
		return f"Error: {e}"

@app.route('/api/saved-weather', methods=['GET'])
def get_saved_weather():
	try:
		conn = mysql.connector.connect(**db_config)
		cursor = conn.cursor(dictionary=True)  # dictionary=True returns rows as dicts
		cursor.execute("SELECT * FROM weather_data ORDER BY timestamp DESC")
		rows = cursor.fetchall()
		cursor.close()
		conn.close()

		return jsonify(rows), 200

	except Exception as e:
		print(f"Error retrieving saved weather: {e}")
		return jsonify({"error": str(e)}), 500

@app.route('/api/saved-weather/<int:record_id>', methods=['DELETE'])
def delete_weather_by_id(record_id):
	try:
		conn = mysql.connector.connect(**db_config)
		cursor = conn.cursor()
		query = "DELETE FROM weather_data WHERE id = %s"
		cursor.execute(query, (record_id,))
		conn.commit()
		cursor.close()
		conn.close()

		return jsonify({"message": "Data deleted successfully"}), 200

	except Exception as e:
		print(e)
		return jsonify({"error": str(e)}), 500

@app.route('/save-weather', methods=['POST'])
def save_weather():
	try:
		data = request.get_json()
		latitude = data['latitude']
		longitude = data['longitude']
		temperature = data['temperature']
		windspeed = data['windspeed']

		conn = mysql.connector.connect(**db_config)
		cursor = conn.cursor()
		query = """
			INSERT INTO weather_data (latitude, longitude, temperature, windspeed)
			VALUES (%s, %s, %s, %s)
		"""
		cursor.execute(query, (latitude, longitude, temperature, windspeed))
		conn.commit()
		cursor.close()
		conn.close()

		return jsonify({"message": "Data saved successfully"}), 200

	except Exception as e:
		print(e)
		return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)