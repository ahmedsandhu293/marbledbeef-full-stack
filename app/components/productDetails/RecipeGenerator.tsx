import React, { useEffect, useState } from "react";

import fetchChatResponse from "@/services/chatService";

interface Recipe {
  title: string;
  steps: string[];
}

const RecipeGenerator = ({
  productDescription,
}: {
  productDescription: string;
}) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleGenerateRecipe = async () => {
    if (!productDescription) return;
    setIsLoading(true);

    const inputValue = productDescription;

    try {
      const response = await fetchChatResponse(inputValue, "recipe");
      const result = JSON.parse(response);

      if (result) {
        setRecipe(result);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGenerateRecipe();
  }, []);

  return (
    <div className="flex items-center justify-center text-white max-w-[600px] font-urbanist p-4 mx-auto max-h-[500px] lg:max-h-full overflow-y-auto">
      <div className="w-full rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-left leading-tight">
          Create Delicious <br /> Recipes in Seconds!
        </h1>

        {recipe && (
          <div className="mt-6 bg-transparent rounded-lg ">
            <h2 className="text-2xl font-semibold text-gold">{recipe.title}</h2>
            <ol className="mt-4 list-decimal list-inside text-gray-300">
              {recipe.steps.map((step, idx) => (
                <li key={idx} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGenerator;
