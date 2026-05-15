from flask import Flask
from flask_cors import CORS

import tensorflow as tf
from emotion_detection import detect_emotion

app = Flask(__name__)

CORS(app)

# Load Emotion Model
model = tf.keras.models.load_model(
    "models/face_emotion_model.h5"
)

print("✅ Emotion Model Loaded Successfully")


@app.route("/")
def home():
    return {
        "message": "EmoTrack AI Backend Running 🚀"
    }


@app.route("/test-model")
def test_model():
    return {
        "status": "Model Loaded Successfully ✅"
    }
@app.route("/detect-emotion", methods=["POST"])
def detect():

    from flask import request
    import cv2
    import numpy as np
    import base64

    data = request.json["image"]

    image_data = data.split(",")[1]

    image_bytes = base64.b64decode(image_data)

    np_arr = np.frombuffer(image_bytes, np.uint8)

    frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    results = detect_emotion(frame)

    return {
        "predictions": results
    }

if __name__ == "__main__":
    app.run(debug=True)