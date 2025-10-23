# AI Elements Chat App - Setup & Running Instructions

## ✅ What's Been Done

1. **Cloned the project** from https://github.com/TheOrcDev/ai-elements
2. **Installed all dependencies** (619 packages)
3. **Configured for OpenAI** instead of Vercel AI Gateway:
   - Installed `@ai-sdk/openai` package
   - Updated API route to use OpenAI models directly
   - Updated UI to only show OpenAI GPT models (GPT 4o and GPT 4 Turbo)
   - Removed web search functionality (was using Perplexity)
4. **Development server is running** on `http://localhost:3000`

## 🔑 Next Steps: Add Your OpenAI API Key

The app is running, but you need to add your OpenAI API key to make it work:

### 1. Get Your OpenAI API Key
- Go to https://platform.openai.com/api-keys
- Create a new API key
- Copy the key (you won't be able to see it again)

### 2. Update `.env.local`
Edit the `.env.local` file in this directory and replace the placeholder:

```env
OPENAI_API_KEY=your_actual_api_key_here
```

With your actual key:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

## 🚀 Using the App

1. **Open your browser** to `http://localhost:3000`
2. **Select a model** (GPT 4o or GPT 4 Turbo)
3. **Type your question** in the chat input
4. **Click send** to get a response

The app will:
- Stream responses in real-time
- Show reasoning when available
- Support model switching on the fly

## 📝 Available Models

- **GPT 4o** - Fastest and most cost-effective
- **GPT 4 Turbo** - More powerful reasoning

## 🛠️ Useful Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linting
npm lint
```

## 📂 Project Structure

- `/app/api/chat/route.ts` - Backend API endpoint (uses OpenAI)
- `/components/ai-chat.tsx` - Main chat UI component
- `/components/ai-elements/` - UI component library

## ⚠️ Important Notes

- Keep your OpenAI API key **private** and never commit it to git
- `.env.local` is already in `.gitignore` for safety
- Streaming responses work best with modern browsers
- Each API call will incur costs based on tokens used

## 🐛 Troubleshooting

If you get a 401 error:
- Check that your API key is correct in `.env.local`
- Verify the key is active in your OpenAI dashboard
- Make sure there are no extra spaces in the key

If you don't see a response:
- Check browser console for errors (F12)
- Verify the server is running (you should see it in terminal)
- Check that you have available API usage in your OpenAI account

## 📚 Learn More

- [AI SDK Documentation](https://sdk.vercel.ai/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
