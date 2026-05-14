import cv2
import numpy as np
import tensorflow as tf

# Load Model
model = tf.keras.models.load_model(
    "models/face_emotion_model.h5"
)

# Emotion Labels
emotion_labels = [
    "Angry",
    "Disgust",
    "Fear",
    "Happy",
    "Neutral",
    "Sad",
    "Surprise"
]

# Load Face Detector
face_classifier = cv2.CascadeClassifier(
    cv2.data.haarcascades +
    "haarcascade_frontalface_default.xml"
)


def detect_emotion(frame):

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray = cv2.equalizeHist(gray)

    faces = face_classifier.detectMultiScale(
        gray,
        scaleFactor=1.05,
        minNeighbors=3
    )
    print("Faces Detected:", len(faces))

    results = []

    for (x, y, w, h) in faces:

        roi_gray = gray[y:y+h, x:x+w]

        roi_gray = cv2.resize(roi_gray, (48, 48))

        roi = roi_gray.astype("float") / 255.0

        roi = np.expand_dims(roi, axis=0)

        roi = np.expand_dims(roi, axis=-1)

        prediction = model.predict(roi)[0]

        label = emotion_labels[np.argmax(prediction)]

        confidence = float(np.max(prediction))

        results.append({
            "emotion": label,
            "confidence": confidence,
            "box": [int(x), int(y), int(w), int(h)]
        })

    return results