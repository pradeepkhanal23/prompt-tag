import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt not found", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get the prompt", {
      status: 500,
    });
  }
};
//PATCH

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();

    const { prompt, tag } = request.json();

    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt) {
      return new Response("Prompt not found", {
        status: 404,
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get the prompt", {
      status: 500,
    });
  }
};
//DELETE

export const DELETE = async ({ params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get the prompt", {
      status: 500,
    });
  }
};
