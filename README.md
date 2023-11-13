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

  World Happiness Report가 행복 지수(Happiness Score)를 산정하는 6개의 요인들의 상관관계를 분석하고 이를 개인의 행복 지수를 산정하는 요인의 가중치로 사용하였습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d857052-a0cf-4ff5-94b1-40b35cfb202c/89b9e3c9-31ce-44fc-9ee5-26258e5f3d28/Untitled.png)

위 표는 상위 다섯 국가들의 2015년부터 2023년까지 지표의 head만 보인 표입니다. 지수들은 GDP, Family, Life, Freedom, Generosity, Trust 이고 이들의 영향으로 행복 지수가 결정됩니다. 

## 여섯 지표들의 Correlation Matrix

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d857052-a0cf-4ff5-94b1-40b35cfb202c/26f036e4-28b3-4e14-85ac-8b313a160a6d/Untitled.png)

GDP가 0.8로 행복 지수와 가장 연관이 높고 0.76 Life가 높은 것을 확인할 수 있었습니다. 하지만 GDP와 Life의 연관이 높기 때문에 GDP와 Family 그리고 Freedom을 행복 지수에 연관이 높은 지수로 선정하였습니다. 이와 더불어 한국(South Korea)은 6개의 요인 중에서 Freedom 지수가 다른 국가들과 비교했을 때 상당히 낮았기 때문에 중요 요인으로 선정하였습니다. 

## 여섯 지표들의 PairPlot

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d857052-a0cf-4ff5-94b1-40b35cfb202c/247c25f0-5174-4deb-ad81-dcaec131afb9/Untitled.png)

## Histogram X ScatterPlot

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d857052-a0cf-4ff5-94b1-40b35cfb202c/c5b27af5-d179-4f1f-ab89-210e7dd7ee29/Untitled.png)

## OLS Regression Results - GDP, Family, Freedom

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d857052-a0cf-4ff5-94b1-40b35cfb202c/0bec5985-430f-4758-9440-e6569e48dfc7/Untitled.png)

GDP, Family, Freedom 한국의 세 개 지수 값으로 OLS model로 Regression한 결과입니다.

| GDP_Capita | 0.879583 |
| --- | --- |
| Social_Relation | 1.547087 |
| Free2Choice | 2.059342 |

위처럼 OLS 모델을 활용한 Regression 결과의 계수값들을 활용하여 개인의 행복 지수를 계산하였습니다.

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
