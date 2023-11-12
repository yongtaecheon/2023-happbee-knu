from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from openai import OpenAI
import random
import json
from geopy.geocoders import Nominatim
from bs4 import BeautifulSoup # pip install beautifulsoup4

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
  file_path= './survey_list.json'
  with open(file_path,'r', encoding='UTF8') as f:
    text_dic=json.load(f)
  idx = ["경제","관계","자유","감정","삶의_만족도"]
  sur=load_survey(text_dic, idx)
  print(type(jsonify(sur)))
  print('survey list loaded')
  return jsonify(sur)

#Youtube Geolocation API를 활용하여 로드
def get_current_location():
    # YOUTUBE API 키
    API_KEY = ['AIzaSyCcis4wzheGUE8j9hRQ9xp43w7LREedD6M',
            'AIzaSyCybUkLvjkdaWFgdc7GtVdnn-vgal0g0mg']
    # 현재 위치 요청
    try:
        url = "https://www.googleapis.com/geolocation/v1/geolocate?key={}".format(API_KEY[0])
    except: #API 할당량 다차면 다른 키 가져오기
        url = "https://www.googleapis.com/geolocation/v1/geolocate?key={}".format(API_KEY[1])
    response = requests.post(url)

    # 요청이 성공하면 응답을 처리
    if response.status_code == 200:
        # 위도와 경도를 추출
        latitude = response.json()["location"]["lat"]
        longitude = response.json()["location"]["lng"]
        return latitude, longitude
    else:
        # 요청이 실패하면 오류를 출력
        print("요청실패 코드{}오류".format(response.status_code))
        return None, None
#위도 경도를 주소로 변환
def latalt_to_addr(lat, lon):
    coords = f"{lat},{lon}"
    geolocator = Nominatim(user_agent = 'South Korea')
    location = geolocator.reverse(coords)
    addr = location.address
    addr=addr.split(',')[:-2]
    addr.reverse()
    addr = ' '.join(s for s in addr)
    return addr

def get_hospital_list(location):
  hoslist = []

  url = f'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query={location}+근처+심리상담센터'

  response = requests.get(url)

  if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    query = soup.select('div.qbGlu')
    
    for q in query:
        title = q.select_one('span.YwYLL').text
        phone_number = q.select_one('div.mqM2N.l8afP').text
        address = soup.select_one('span.Pb4bU').text

        numeric_phone_number = ''.join(filter(lambda x: x.isdigit() or x =='-', phone_number))

        hoslist.append((title, numeric_phone_number, address))
        # print(title)
        # print(numeric_phone_number)
        # print(address)
  else : 
    print(response.status_code)

  return hoslist


@app.route('/request-hosp', methods=['GET'])
def send_hosp():
  lat, lon = get_current_location()
  address = latalt_to_addr(lat, lon)
  hospital = get_hospital_list(address)
  hospital.insert(0,address)
  print(hospital)
  return jsonify(hospital)


if __name__ == '__main__':
    app.run(debug=True)
