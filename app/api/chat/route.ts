import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const {
        messages,
        model,
        webSearch,
    }: { messages: UIMessage[]; model: string; webSearch: boolean } =
        await req.json();

    // Map the model string to OpenAI model ID
    const modelId = model === 'openai/gpt-4o' ? 'gpt-4o' : 'gpt-4';
    
    const result = streamText({
        model: openai(modelId),
        messages: convertToModelMessages(messages),
        system:
            'You are a helpful assistant that can answer questions and help with tasks',
    });

    // send sources and reasoning back to the client
    return result.toUIMessageStreamResponse({
        sendSources: true,
        sendReasoning: true,
    });
}