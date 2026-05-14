import ResultsPreview from "../components/ResultsPreview";

function Results() {

  return (

    <div className="max-w-[1320px] mx-auto py-6">

      <h1 className="text-[34px] font-bold text-gray-800">
        Your Results
      </h1>

      <p className="text-gray-500 mt-2">
        Emotional wellness analysis summary.
      </p>

      <ResultsPreview />

    </div>
  );
}

export default Results;