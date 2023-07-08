# Description: A simple chatbot about cooking using openai's GPT4 API.
# Requirements: 
#   pip install openai
#   pip install tiktoken
#   export OPENAI_API_KEY=<your key>

import os
import openai
import tiktoken

MAX_TOKENS = 8192
CUR_TOKENS = 0


def update_chat_history(history_messages, encoding, chat_completion = None):
    global CUR_TOKENS, MAX_TOKENS
    if chat_completion:
        last_message = chat_completion["choices"][0]["message"]["content"]
        history_messages.append(chat_completion["choices"][0]["message"])
        CUR_TOKENS += len(encoding.encode(last_message))

    # Check token limit and remove oldest messages if necessary
    if  CUR_TOKENS > MAX_TOKENS:
        while True:
            tokens = len(encoding.encode(history_messages.pop(1)["content"]))
            if CUR_TOKENS - tokens <= MAX_TOKENS:
                break


def get_chat_response(model, encoding, prompt, history_messages):
    if prompt:
        history_messages.append({"role": "user", "content": prompt})
        global CUR_TOKENS
        CUR_TOKENS += len(encoding.encode(prompt))
    else:
        return ""
    update_chat_history(history_messages, encoding)
    chat_completion = openai.ChatCompletion.create(
        model=model,
        messages=history_messages
    )
    update_chat_history(history_messages, encoding, chat_completion)

    return chat_completion["choices"][0]["message"]["content"]


def get_image_response(prompt):
    if prompt:
        image_completion = openai.Image.create(
                            prompt=prompt,
                            n=1,
                            size="1024x1024"
                        )
        return image_completion["data"][0]["url"]
    else:
        return ""


def main():
    openai.api_key = os.getenv("OPENAI_API_KEY")

    model = "gpt-4-0314"

    encoding = tiktoken.encoding_for_model("gpt-4-0314")

    history_messages=[{"role": "system", "content": "Hello, You are a cook assistant named Jarvis."
                "and you are helping a chef to cook a dish by giving recipe steps"
                "and nutritional information. Your responses should be simplified and concise."}]

    global CUR_TOKENS
    CUR_TOKENS += len(encoding.encode(history_messages[0]["content"]))

    prompt = "Hi, Jarvis."
    print("Jarvis:", get_chat_response(model, encoding, prompt, history_messages), "\n")
    while True:
        prompt = input("You: ")
        if prompt == "quit":
            break
        elif "can you show me" in prompt.lower() or "look like" in prompt.lower():
            history_messages.append({"role": "user", "content": prompt})
            CUR_TOKENS += len(encoding.encode(prompt))
            prompt = "What's the name of the thing I want to see just before? Just return the name of the thing."

            # Get the name of the dish passed to the imagebot
            object_name = get_chat_response(model, encoding, prompt, history_messages)
            if object_name:
                print(f"Jarvis: Here is the image of {object_name}:", get_image_response(object_name), "\n")
        else:
            print("Jarvis:", get_chat_response(model, encoding, prompt, history_messages), "\n")


if __name__ == "__main__":
    main()
