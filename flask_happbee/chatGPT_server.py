from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from openai import OpenAI
import random
import json

load_dotenv()

app = Flask(__name__)

# set api key
client = OpenAI(
  api_key="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"# os.getenv('OPENAI_API_KEY'),  # this is also the default, it can be omitted
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

file_path='./survey_list.json'
def load_survey(sur_dic, index):
  survey_list=[] 
  j=1
  keys=["id","qu","wei"]
  for i in sur_dic:
    if i in '경제':
      eco_list=random.sample(sur_dic[i],2)
      for x in range(len(eco_list)):
        values=[j,eco_list[x] ,2.06]
        d=dict(zip(keys, values))
        survey_list.append(d)
    if i in '관계':
      rel_list=random.sample(sur_dic[i],2)
      for x in range(len(rel_list)):
        values=[j,rel_list[x] ,1.55]
        d=dict(zip(keys, values))
        survey_list.append(d)
    if i in '자유':
      free_list=random.sample(sur_dic[i],2)
      for x in range (len(free_list)):
        values=[j,free_list[x] ,0.88]
        d=dict(zip(keys, values))
        survey_list.append(d)
    if i in '감정':
      emo_list=random.sample(sur_dic[i],4)
      for x in range (len(emo_list)):
        values=[j,emo_list[x] ,2.76]
        d=dict(zip(keys, values))
        survey_list.append(d)
    if i in '삶의 만족도':
      sat_list=random.sample(sur_dic[i],4)
      for x in range (len(sat_list)):
        values=[j,sat_list[x] ,2.76]
        d=dict(zip(keys, values))
        survey_list.append(d)
    j+=1
  return survey_list

@app.route('/request-survey', methods=['GET'])
def send_survey():
  with open(file_path,'r') as f:
    text_dic=json.load(f)
  idx = ["경제","관계","자유","감정","삶의_만족도"]
  sur=load_survey(text_dic, idx)
  print(type(jsonify(sur)))
  print('survey list loaded')
  return jsonify(sur)



if __name__ == '__main__':
    app.run(debug=True)