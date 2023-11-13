<div align="center">
  <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/42794553/4b3e8352-9e7e-46a7-9734-3960ec9912d2" width="50%">
</div>

#1. TEAM: HAPPBEE
---
| [<img src="https://github.com/kimseyun314.png" width="100px">](https://github.com/kimseyun314) | [<img src="https://github.com/EunJiKim02.png" width="100px">](https://github.com/EunJiKim02) | [<img src="https://github.com/mchaewon.png" width="100px">](https://github.com/mchaewon) | [<img src="https://github.com/yongtaecheon.png" width="100px">](https://github.com/yongtaecheon) |
| :-----: | :-----: | :-----: | :-----: |
| [김세연](https://github.com/kimseyun314) | [김은지](https://github.com/EunJiKim02) | [문채원](https://github.com/mchaewon) | [천용태](https://github.com/yongtaecheon) |


#2. 제출 타입 및 주제
---
C타입 - 행복 자가 진단 테스트와 공감 챗봇 고양이를 통한 대한민국의 낮은 행복 지수 개선 프로젝트


#3. 프로젝트 한 줄 설명
---
사용자들의 행복 테스트 분석을 진행하고 공감챗봇서비스 제공


#4. 프로젝트에 활용된 기술
---
1) **React and Flask** - Web Library&Framework
   
2) **OLS Method** - Data Analysis
  
3) **Prompt Engineering** - AI NLP
   
    openAI의 chatGPT API(gpt-3.5-turbo)를 이용하여 공감 챗봇 서비스를 구현하였다. 공감이라는 서비스 목적에 맞는 chatGPT의 답변을 이끌어내기 위해 프롬프트 엔지니어링 기술을 사용하였다.
    
    * 사용한 프롬프트 : 

    ```
    너는 이제부터 사람들의 이야기를 들어주고 공감해주는 역할이야.
   
    첫 시작은 "오늘 하루는 어땠어?" 등 안부를 묻는 질문으로 시작해줘
   
    답변은 최대한 간결하게 부탁해
   
    친구처럼 구어체를 사용해서 대화를 이어나가야해.
   
    항상 공감해주는 자세로 사람들의 의견을 들어줘.해결책 보다는 공감!!!!!!!위주로 답변해줘
   
    단어 수에 관해 부연 설명 하지 마!!!!!!!!!!!!!!!!!!!!!!!!!!
   
    대답없이!!! 바로 질문 시작해!!!!!!!! 시작
    ```
    
    * 프롬프트 적용 대화 예시
      
      <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/111948424/75cf9bff-d095-4468-9af7-3fb6d25850e3" width="400" height="500"/>

    
    * 해당 프롬프트를 적용한 코드
    ```
    @app.route('/ask', methods=['POST'])
    def chatGPT():
        userInput = request.json['user_input']
        global chat_count
        chat_count = chat_count+1
        # Call the chat GPT API
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content":"너는 이제부터 사람들의 이야기를 들어주고 공감해주는 역할이야.\n\
                                              첫 시작은 ""오늘 하루는 어땠어?"" 등 안부를 묻는 질문으로 시작해줘\n\
                                              답변은 최대한 간결하게 부탁해\n\
                                              친구처럼 구어체를 사용해서 대화를 이어나가야해. 반말로 해줘!!!!!!!!!\n\
                                              항상 공감해주는 자세로 사람들의 의견을 들어줘.해결책 보다는 공감!!!!!!!위주로 답변해줘" },
                {"role": "user",
                  "content": f"${userInput}"},
            ],
            temperature=1, #정보성 글일때는 낮은 온도를, 창의성이 필요한 경우에는 높은 온도로 설정하여 사용, deafult=0.7
            max_tokens=256
        )
        answer = completion.choices[0].message.content
    
        return jsonify({"answer": answer})
    ```
    
#5. YOUTUBE
---
https://youtu.be/MBpvx8zbeT4
