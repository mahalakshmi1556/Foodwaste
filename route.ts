import { NextResponse } from 'next/server';
import { getGeminiModel } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const { ingredients, dietary } = await request.json();

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return NextResponse.json({ error: 'Please provide at least one ingredient.' }, { status: 400 });
    }

    const model = getGeminiModel();
    const prompt = `You are an expert chef and food waste reduction specialist. 
Create a zero-waste recipe using some or all of these available ingredients: ${ingredients.join(', ')}.
Dietary restrictions / preferences: ${dietary || 'None'}.

Provide the response strictly as valid JSON with the following keys (no extra conversational text):
{
  "recipeName": "string",
  "prepTime": "string",
  "difficulty": "string",
  "ingredientsNeeded": ["string"],
  "steps": ["string"],
  "foodSafetyTip": "string"
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const recipeData = JSON.parse(cleanedText);

    return NextResponse.json({ success: true, recipe: recipeData });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recipe from AI service.', details: error.message },
      { status: 500 }
    );
  }
}
