from flask import Flask, request, jsonify
from bardapi import Bard
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
bard = Bard(token=os.getenv('BARD_API_KEY'))

@app.route('/ask', methods=['POST'])
def ask_bard():
    userInput = request.json['user_input']
    # userName = request.json['user_name']
    answer = bard.get_answer(f"너는 위로를 해야하는 입장에 있어. 최대한 감정적으로 공감해줘. 네가 친한 친구라 생각하고 편안한 말투로 대답해줘.대답의 길이는 200자가 넘지 않도록 해줘.대답 글자 길이는 표시안해도 돼.아래는 나의 상황이야.\n ${userInput}")['content']
    print(answer)

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run()