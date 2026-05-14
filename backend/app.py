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
@app.route("/detect-emotion")
def detect():

    import cv2

    cap = cv2.VideoCapture(0)

    ret, frame = cap.read()

    cap.release()

    if not ret:
        return {
            "error": "Camera not accessible"
        }

    results = detect_emotion(frame)

    return {
        "predictions": results
    }

if __name__ == "__main__":
    app.run(debug=True)