import { env } from '$env/dynamic/private'
import util from 'util'
import { OpenAI } from "langchain/llms/openai";

const OPENAI_API_KEY = env.API_KEY
console.log('API-Key:', OPENAI_API_KEY)

// @ts-ignore
export async function load () {
  //create openai embeddings with api key
  const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY });
  const res = await model.call(
    "What is the latest version of svelte?"
  );

  console.log(util.inspect(res, true, 3, true))
  return {
    data: [...res]
  }

}
