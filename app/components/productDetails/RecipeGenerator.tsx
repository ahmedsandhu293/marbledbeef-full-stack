import React from "react";

const RecipeGenerator: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-white max-w-[600px] font-urbanist p-4 mx-auto max-h-[500px] lg:max-h-full overflow-y-auto">
      <div className="w-full rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-left leading-tight">
          Create Delicious <br /> Recipes in Seconds!
        </h1>
        <p className="text-left mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
          Enter your ingredients, choose your preferences, and let our{" "}
          <br className="hidden md:block" /> AI create the perfect recipe for
          you.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
          <input
            className="w-full sm:flex-grow p-3 rounded-2xl bg-transparent border border-gold text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-none"
            placeholder="Enter your recipe name, ingredients..."
            type="text"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-2xl hover:bg-yellow-600">
            Generate
          </button>
        </div>

        <div className="mt-6 bg-transparent p-4 rounded-lg border border-gold">
          <h2 className="text-lg font-semibold text-white">Example Prompts</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Eggs, spinach, and mushrooms",
              "I have tomatoes, onions, and pasta.",
              "Healthy recipe with lentils, kale, and carrots.",
              "Vegan recipe with quinoa, chickpeas, and bell peppers.",
            ].map((prompt, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-200 border border-gold text-black rounded-md text-sm cursor-pointer"
              >
                {prompt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;
