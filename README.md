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
### 1) **React and Flask** - Web Library&Framework

  주요 페이지 구성 및 설명
  
  - Main.js : 메인화면
      
      햅비냥과 대화를 할 때마다 햅비냥의 게이지가 올라갑니다. 게이지가 모두 채워지면 햅비냥과의 친밀도가 상승합니다. ‘햅비냥과 채팅’, ‘햅비냥 꾸미기’ 버튼을 이용해 햅비냥과 상호작용할 수 있습니다.  
      <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/adde43f9-d368-4866-b2cf-27c6fa38325c" alt="image" width="700px" height="400px">
      
  - SurveyList.js : 행복 자가진단 테스트(햅비지수) 및 분석
      
      경제, 관계, 자유, 감정, 삶의 만족도 항목을 평가하기 위해 무작위로 14개의 질문이 사용자에게 주어집니다. 각 항목마다 1~10 사이의 숫자를 선택할 수 있으며, 이를 통해 사용자의 상태를 진단합니다.  
      
    <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/a96f5957-b50b-428a-a62a-8d570fc4ab0c" alt="image" width="700px" height="400px">
  
      
  
  - SurveyResult.js : 설문 결과 확인
      
      설문이 종료되면 나의 행복지수(햅비지수)를 확인할 수 있습니다. 나의 분석 결과 뿐만 아니라, 다른 사람들의 평균 수치와 비교할 수 있습니다. 
  
    <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/29fcb318-f213-40bc-9f1d-3e2d68736622" alt="image" width="700px" height="400px">
  
      
  
  - Chat.js : 햅비냥과 대화하기
      
      햅비냥과 고민 상담을 할 수 있습니다. 햅비냥은 prompt engineering 으로 고민 상담에 최적화된 AI 챗봇입니다. 사용자의 고민을 듣고 해결책과 위로를 들으면서 마음 치유를 할 수 있습니다. 
  
    <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/37486d16-0d06-4455-a782-44d3d9d21470" alt="image" width="700px" height="400px">
  
  
  - Item.js : 햅비냥 꾸미기
  
        
      내 햅비냥을 꾸밀 수 있는 공간입니다. 현재 기본 꾸미기 아이템이 지급되어 있으며, 내 햅비냥에게 다양한 악세사리를 착용해볼 수 있습니다.  
  
    <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/fada4560-15ba-4d64-8dfa-b2d5103da419" alt="image" width="700px" height="400px">
  
  
      
  - Hosp.js : 주변 심리상담센터, 정신과 정보 찾기
  
    현재 위치를 기반으로 사용자 주변 심리 상담센터의 이름, 위치, 전화번호를 제공합니다. 때론, 혼자보다 전문가의 진단 및 상담이 필요한 경우가 있습니다. 사용자들에게 상담센터 정보를 제공하여 적절한 시기에 치료를 할 수 있도록 도와줄 수 있습니다.
  
    <img src="https://github.com/yongtaecheon/2023-happbee-knu/assets/87495422/4ecf967b-3209-4b3c-8df5-af32870dcd33" alt="image" width="700px" height="400px">
  
      
<br>

   
### 2) **OLS Method** - Data Analysis

  World Happiness Report가 행복 지수(Happiness Score)를 산정하는 6개의 요인들의 상관관계를 분석하고 이를 개인의 행복 지수를 산정하는 요인의 가중치로 사용하였습니다. 
  
  ![table](https://github.com/yongtaecheon/2023-happbee-knu/assets/80295096/950c1fa4-12c2-42a2-b416-cce28f371eaa)
  
  위 표는 상위 다섯 국가들의 2015년부터 2023년까지 지표의 head만 보인 표입니다. 지수들은 GDP, Family, Life, Freedom, Generosity, Trust 이고 이들의 영향으로 행복 지수가 결정됩니다. 
  
  ## 여섯 지표들의 Correlation Matrix
  
  ![cor_matrix](https://github.com/yongtaecheon/2023-happbee-knu/assets/80295096/c7865b3a-efe0-4ea5-b24f-a5321af0dbf8)
  
  GDP가 0.8로 행복 지수와 가장 연관이 높고 0.76 Life가 높은 것을 확인할 수 있었습니다. 하지만 GDP와 Life의 연관이 높기 때문에 GDP와 Family 그리고 Freedom을 행복 지수에 연관이 높은 지수로 선정하였습니다. 이와 더불어 한국(South Korea)은 6개의 요인 중에서 Freedom 지수가 다른 국가들과 비교했을 때 상당히 낮았기 때문에 중요 요인으로 선정하였습니다. 
  
  ## 여섯 지표들의 PairPlot
  
  ![pariplot](https://github.com/yongtaecheon/2023-happbee-knu/assets/80295096/c7e0cecb-c4cc-442c-a8f3-4141d007052a)
  
  ## Histogram X ScatterPlot
  
  ![hist_plot](https://github.com/yongtaecheon/2023-happbee-knu/assets/80295096/1e30876f-3774-49d5-8e70-48e877bb3ee4)
  
  ## OLS Regression Results - GDP, Family, Freedom
  
  ![ols](https://github.com/yongtaecheon/2023-happbee-knu/assets/80295096/ccc224f1-cccc-46c6-a832-2378e7692558)
  
  GDP, Family, Freedom 한국의 세 개 지수 값으로 OLS model로 Regression한 결과입니다.
  
  | Factor | Coefficient |
  | --- | --- |
  | GDP_Capita | 0.879583 |
  | Social_Relation | 1.547087 |
  | Free2Choice | 2.059342 |
  
  위처럼 OLS 모델을 활용한 Regression 결과의 계수값들을 활용하여 개인의 행복 지수를 계산하였습니다.


<br>


### 3) **Prompt Engineering** - AI NLP
   
  openAI의 chatGPT API(gpt-3.5-turbo)를 이용하여 공감 챗봇 서비스를 구현하였습니다. 공감이라는 서비스 목적에 맞는 chatGPT의 답변을 이끌어내기 위해 프롬프트 엔지니어링 기술을 사용하였습니다다.
    
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
