from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)

# set api key
client = OpenAI(
  api_key=os.getenv('OPENAI_API_KEY'),  # this is also the default, it can be omitted
)

@app.route('/ask', methods=['POST'])
def chatGPT():
    userInput = request.json['user_input']

    # Call the chat GPT API
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            #{"role": "system", "content": "너는 문자를 작성하는 문자 마법시이다. 조건에 맞게 문자를 최대한 길게 작성하라."},
            {"role": "user",
              "content": f"${userInput}"},
        ],
        temperature=1, #정보성 글일때는 낮은 온도를, 창의성이 필요한 경우에는 높은 온도로 설정하여 사용, deafult=0.7
        max_tokens=256
    )
    answer = completion.choices[0].message.content

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)