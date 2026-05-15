import { useRef } from "react";
import { useState } from "react";

function Assessment() {

  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState("");
const [confidence, setConfidence] = useState("");
const [analyzing, setAnalyzing] = useState(false);

  const steps = [
    {
      title: "Face Analysis",
      icon: "😊",
      heading: "Face Emotion Analysis",
      desc: "We analyze facial expressions and emotions.",
    },

    {
      title: "Voice Analysis",
      icon: "🎤",
      heading: "Voice Emotion Analysis",
      desc: "We analyze voice tone and speaking patterns.",
    },

    {
      title: "Questionnaire",
      icon: "⌨️",
      heading: "Questionnaire (Typing Behavior)",
      desc: "We analyze typing behavior while you answer.",
    },

    {
      title: "Pulse Rate",
      icon: "💓",
      heading: "Pulse Rate Analysis",
      desc: "We monitor heart rate and stress indicators.",
    },

    {
      title: "Results",
      icon: "📋",
      heading: "Generating Results",
      desc: "Preparing emotional wellness insights.",
    },
  ];

const nextStep = () => {

  if (currentStep < steps.length - 1) {

    setCurrentStep(currentStep + 1);

  } else {

    window.location.href = "/results";

  }

};
const startCamera = async () => {

  try {

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

  } catch (error) {

    console.log(error);

  }

};

const detectEmotion = async () => {

  try {

    setAnalyzing(true);

    const canvas = document.createElement("canvas");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      videoRef.current,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/jpeg");

    const response = await fetch(
      "http://127.0.0.1:5000/detect-emotion",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          image,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.predictions?.length > 0) {

      setEmotion(data.predictions[0].emotion);

      setConfidence(
        `${Math.round(
          data.predictions[0].confidence * 100
        )}%`
      );

    }

    setAnalyzing(false);

  } catch (error) {

    console.log(error);

    setAnalyzing(false);

  }

};

  return (

    <div className="max-w-[1320px] mx-auto py-6">

      {/* HEADER */}
      <div>

        <button className="text-gray-500 mb-5">
          ← Back
        </button>

        <h1 className="text-[38px] font-bold text-gray-800">
          Assessment in Progress
        </h1>

        <p className="text-gray-500 mt-2">
          Complete all sections to generate your wellness insights.
        </p>

      </div>

      {/* STEPS */}
      <div className="mt-10 flex items-center justify-between">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex flex-col items-center flex-1 relative"
          >

            <div
              className={`
              w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition
              ${
                index <= currentStep
                  ? "bg-[#f3edff] border-[#7c3aed]"
                  : "bg-white border-gray-200"
              }
              `}
            >

              {step.icon}

            </div>

            <p className="mt-4 text-sm text-center font-medium text-gray-700">
              {step.title}
            </p>

            {index !== steps.length - 1 && (

              <div
                className={`
                absolute top-8 left-[55%] w-full h-[2px]
                ${
                  index < currentStep
                    ? "bg-[#7c3aed]"
                    : "bg-purple-200"
                }
                `}
              ></div>

            )}

          </div>

        ))}

      </div>

      {/* CARD */}
      <div className="mt-12 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-semibold text-gray-800">

              {steps[currentStep].heading}

            </h2>

            <p className="text-gray-500 mt-2">

              {steps[currentStep].desc}

            </p>

          </div>

          <div className="bg-[#f8f8fc] px-5 py-2 rounded-full text-sm text-gray-500">

            Step {currentStep + 1} of {steps.length}

          </div>

        </div>

        <div className="mt-10">

  {currentStep === 0 ? (

    <div>

      <h3 className="text-xl font-semibold text-gray-800">
        Face Emotion Detection
      </h3>

      <p className="text-gray-500 mt-2">
        Start camera to analyze facial emotions.
      </p>

      <div className="mt-6 bg-black rounded-[24px] overflow-hidden h-[350px] flex items-center justify-center">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />

      </div>

      <div className="flex gap-4 mt-6">

  <button
    onClick={startCamera}
    className="
    bg-[#7c3aed]
    hover:bg-[#6d28d9]
    text-white
    px-6
    py-3
    rounded-2xl
    font-medium
    "
  >

    Start Camera

  </button>

  <button
    onClick={detectEmotion}
    className="
    bg-black
    hover:bg-gray-800
    text-white
    px-6
    py-3
    rounded-2xl
    font-medium
    "
  >

    Detect Emotion

  </button>

</div>
      {analyzing && (

  <div className="mt-6 bg-[#f8f8fc] rounded-2xl p-5">

    <p className="text-[#7c3aed] font-medium">
      Analyzing facial emotions...
    </p>

  </div>

)}

{emotion && (

  <div className="mt-6 bg-[#f8f8fc] rounded-2xl p-6 border border-purple-100">

    <h3 className="text-lg font-semibold text-gray-800">
      Detection Result
    </h3>

    <div className="mt-4 space-y-2">

      <p className="text-gray-700">
        <span className="font-semibold">
          Emotion:
        </span>{" "}
        {emotion}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">
          Confidence:
        </span>{" "}
        {confidence}
      </p>

    </div>

  </div>

)}

    </div>

  ) : (

    <div>

      <h3 className="text-xl font-semibold text-gray-800">

        How have you been feeling mentally in the past few days?

      </h3>

      <textarea
        placeholder="Type your answer here..."
        className="
        w-full
        mt-6
        border
        border-gray-200
        rounded-[24px]
        p-6
        outline-none
        min-h-[180px]
        resize-none
        "
      />

    </div>

  )}

</div>

        {/* METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          <div className="bg-[#f8f8fc] rounded-2xl p-5">

            <p className="text-gray-400 text-sm">
              Typing Speed
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              100 WPM
            </h3>

          </div>

          <div className="bg-[#f8f8fc] rounded-2xl p-5">

            <p className="text-gray-400 text-sm">
              Error Rate
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              3%
            </h3>

          </div>

          <div className="bg-[#f8f8fc] rounded-2xl p-5">

            <p className="text-gray-400 text-sm">
              Backspaces
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              18
            </h3>

          </div>

          <div className="bg-[#f8f8fc] rounded-2xl p-5">

            <p className="text-gray-400 text-sm">
              Hesitation Time
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              1.2s
            </h3>

          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-end mt-10">

          <button
            onClick={nextStep}
            className="
            bg-[#7c3aed]
            hover:bg-[#6d28d9]
            text-white
            px-8
            py-4
            rounded-2xl
            font-medium
            transition
            "
          >

            {currentStep === steps.length - 1
              ? "Completed"
              : "Next Step →"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Assessment;