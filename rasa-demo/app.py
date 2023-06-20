from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "Hello, Rasa Chatbot!"

@app.route("/webhook", methods=["POST"])
def webhook():
    data = request.json
    response = requests.post("https://chatbot-qa.cmnetwork.co/webhooks/rest/webhook", json=data)
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, send_file
# from pytest import console_main

# app = Flask(__name__)

# @app.route('/img')
# def get_image(path):
#     console.log(path)
#     image_path = 'img/{}'.format(path)
#     console_main.log("-------")
#     console.log(image_path)
#     return send_file(image_path, mimetype='image/gif')

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=7000)
