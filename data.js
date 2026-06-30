const MOVIE_DATA = [
  {
    "id": 1,
    "cover": "https://p0.meituan.net/movie/ce4da3e03e655b5b88ed31b5cd7896cf62472.jpg@464w_644h_1e_1c",
    "chinese_title": "霸王别姬",
    "english_title": "Farewell My Concubine",
    "categories": [
      "剧情",
      "爱情"
    ],
    "region": "中国内地、中国香港",
    "duration": "171 分钟",
    "release_date": "1993-07-26 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 2,
    "cover": "https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c",
    "chinese_title": "这个杀手不太冷",
    "english_title": "Léon",
    "categories": [
      "剧情",
      "动作",
      "犯罪"
    ],
    "region": "法国",
    "duration": "110 分钟",
    "release_date": "1994-09-14 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 3,
    "cover": "https://p0.meituan.net/movie/283292171619cdfd5b240c8fd093f1eb255670.jpg@464w_644h_1e_1c",
    "chinese_title": "肖申克的救赎",
    "english_title": "The Shawshank Redemption",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "美国",
    "duration": "142 分钟",
    "release_date": "1994-09-10 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 4,
    "cover": "https://p1.meituan.net/movie/b607fba7513e7f15eab170aac1e1400d878112.jpg@464w_644h_1e_1c",
    "chinese_title": "泰坦尼克号",
    "english_title": "Titanic",
    "categories": [
      "剧情",
      "爱情",
      "灾难"
    ],
    "region": "美国",
    "duration": "194 分钟",
    "release_date": "1998-04-03 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 5,
    "cover": "https://p0.meituan.net/movie/289f98ceaa8a0ae737d3dc01cd05ab052213631.jpg@464w_644h_1e_1c",
    "chinese_title": "罗马假日",
    "english_title": "Roman Holiday",
    "categories": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "region": "美国",
    "duration": "118 分钟",
    "release_date": "1953-08-20 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 6,
    "cover": "https://p0.meituan.net/movie/da64660f82b98cdc1b8a3804e69609e041108.jpg@464w_644h_1e_1c",
    "chinese_title": "唐伯虎点秋香",
    "english_title": "Flirting Scholar",
    "categories": [
      "喜剧",
      "爱情",
      "古装"
    ],
    "region": "中国香港",
    "duration": "102 分钟",
    "release_date": "1993-07-01 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 7,
    "cover": "https://p0.meituan.net/movie/223c3e186db3ab4ea3bb14508c709400427933.jpg@464w_644h_1e_1c",
    "chinese_title": "乱世佳人",
    "english_title": "Gone with the Wind",
    "categories": [
      "剧情",
      "爱情",
      "历史",
      "战争"
    ],
    "region": "美国",
    "duration": "238 分钟",
    "release_date": "1939-12-15 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 8,
    "cover": "https://p0.meituan.net/movie/1f0d671f6a37f9d7b015e4682b8b113e174332.jpg@464w_644h_1e_1c",
    "chinese_title": "喜剧之王",
    "english_title": "The King of Comedy",
    "categories": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "region": "中国香港",
    "duration": "85 分钟",
    "release_date": "1999-02-13 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 9,
    "cover": "https://p0.meituan.net/movie/8959888ee0c399b0fe53a714bc8a5a17460048.jpg@464w_644h_1e_1c",
    "chinese_title": "楚门的世界",
    "english_title": "The Truman Show",
    "categories": [
      "剧情",
      "科幻"
    ],
    "region": "美国",
    "duration": "103 分钟",
    "release_date": "",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 10,
    "cover": "https://p0.meituan.net/movie/27b76fe6cf3903f3d74963f70786001e1438406.jpg@464w_644h_1e_1c",
    "chinese_title": "狮子王",
    "english_title": "The Lion King",
    "categories": [
      "动画",
      "歌舞",
      "冒险"
    ],
    "region": "美国",
    "duration": "89 分钟",
    "release_date": "1995-07-15 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 11,
    "cover": "https://p1.meituan.net/movie/06ec3c1c647942b1e40bca84036014e9490863.jpg@464w_644h_1e_1c",
    "chinese_title": "V字仇杀队",
    "english_title": "V for Vendetta",
    "categories": [
      "剧情",
      "动作",
      "科幻",
      "惊悚"
    ],
    "region": "美国、英国、德国",
    "duration": "132 分钟",
    "release_date": "2005-12-11 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 12,
    "cover": "https://p0.meituan.net/movie/34998e31c6d07475f1add6b8b16fd21d192579.jpg@464w_644h_1e_1c",
    "chinese_title": "少年派的奇幻漂流",
    "english_title": "Life of Pi",
    "categories": [
      "剧情",
      "奇幻",
      "冒险"
    ],
    "region": "美国、中国台湾、英国、加拿大",
    "duration": "127 分钟",
    "release_date": "2012-11-22 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 13,
    "cover": "https://p0.meituan.net/movie/7b7d1f8aa36d7a15463ce6942708a1a7265296.jpg@464w_644h_1e_1c",
    "chinese_title": "美丽心灵",
    "english_title": "A Beautiful Mind",
    "categories": [
      "剧情",
      "传记"
    ],
    "region": "美国",
    "duration": "135 分钟",
    "release_date": "2001-12-13 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 14,
    "cover": "https://p1.meituan.net/movie/05bc2f0ccf97aacfa64fcac4f237cf8082385.jpg@464w_644h_1e_1c",
    "chinese_title": "初恋这件小事",
    "english_title": "สิ่งเล็กเล็กที่เรียกว่า...รัก",
    "categories": [
      "喜剧",
      "爱情"
    ],
    "region": "泰国",
    "duration": "118 分钟",
    "release_date": "2012-06-05 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 15,
    "cover": "https://p1.meituan.net/movie/640cc32445df972b066c9a04b194da141104515.jpg@464w_644h_1e_1c",
    "chinese_title": "借东西的小人阿莉埃蒂",
    "english_title": "借りぐらしのアリエッティ",
    "categories": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "日本",
    "duration": "94 分钟",
    "release_date": "2010-07-17 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 16,
    "cover": "https://p0.meituan.net/movie/6cb23356f9d8e0b506349561c633310d102189.jpg@464w_644h_1e_1c",
    "chinese_title": "一一",
    "english_title": "Yi yi: A One and a Two",
    "categories": [
      "剧情",
      "爱情",
      "家庭"
    ],
    "region": "中国台湾、日本",
    "duration": "173 分钟",
    "release_date": "2000-05-15 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 17,
    "cover": "https://p1.meituan.net/movie/580d81a2c78bf204f45323ddb4244b6c6821175.jpg@464w_644h_1e_1c",
    "chinese_title": "美丽人生",
    "english_title": "La vita è bella",
    "categories": [
      "战争",
      "剧情",
      "爱情"
    ],
    "region": "意大利",
    "duration": "116 分钟",
    "release_date": "2020-01-03 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 18,
    "cover": "https://p0.meituan.net/movie/609e45bd40346eb8b927381be8fb27a61760914.jpg@464w_644h_1e_1c",
    "chinese_title": "海上钢琴师",
    "english_title": "La leggenda del pianista sull&#x27;oceano",
    "categories": [
      "剧情",
      "爱情",
      "音乐"
    ],
    "region": "意大利",
    "duration": "126 分钟",
    "release_date": "2019-11-15 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 19,
    "cover": "https://p0.meituan.net/movie/30b20139e68c46d02e0893277d633b701292458.jpg@464w_644h_1e_1c",
    "chinese_title": "千与千寻",
    "english_title": "千と千尋の神隠し",
    "categories": [
      "动画",
      "冒险",
      "奇幻",
      "家庭"
    ],
    "region": "日本",
    "duration": "125 分钟",
    "release_date": "2019-06-21 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 20,
    "cover": "https://p1.meituan.net/movie/a1634f4e49c8517ae0a3e4adcac6b0dc43994.jpg@464w_644h_1e_1c",
    "chinese_title": "迁徙的鸟",
    "english_title": "The Travelling Birds",
    "categories": [
      "纪录片"
    ],
    "region": "法国、德国、意大利、西班牙、瑞士",
    "duration": "98 分钟",
    "release_date": "2001-12-12 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 21,
    "cover": "https://p0.meituan.net/movie/cd18ed2c5cda9e71e17e5e6ef61ced172912303.jpg@464w_644h_1e_1c",
    "chinese_title": "黄金三镖客",
    "english_title": "Il buono, il brutto, il cattivo.",
    "categories": [
      "西部",
      "冒险"
    ],
    "region": "意大利、西班牙、西德",
    "duration": "161 分钟",
    "release_date": "1966-12-23 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 22,
    "cover": "https://p1.meituan.net/movie/a19a7f64a10e133b68de87d2f3bc46f3111417.jpg@464w_644h_1e_1c",
    "chinese_title": "海洋",
    "english_title": "Océans",
    "categories": [
      "纪录片"
    ],
    "region": "法国、瑞士、西班牙、美国、阿联酋",
    "duration": "104 分钟",
    "release_date": "2011-08-12 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 23,
    "cover": "https://p1.meituan.net/movie/ed50b58bf636d207c56989872a91f4cf305138.jpg@464w_644h_1e_1c",
    "chinese_title": "我爱你",
    "english_title": "그대를 사랑합니다",
    "categories": [
      "剧情",
      "爱情"
    ],
    "region": "韩国",
    "duration": "118 分钟",
    "release_date": "2011-02-17 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 24,
    "cover": "https://p0.meituan.net/movie/85215b28d568ea8e2c97766edd95f890210522.jpg@464w_644h_1e_1c",
    "chinese_title": "阿飞正传",
    "english_title": "Days of Being Wild",
    "categories": [
      "剧情",
      "爱情",
      "犯罪"
    ],
    "region": "中国香港",
    "duration": "94 分钟",
    "release_date": "2018-06-25 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 25,
    "cover": "https://p0.meituan.net/movie/de1142a5dceb901eb939eb0bcfc2f88470909.jpg@464w_644h_1e_1c",
    "chinese_title": "爱·回家",
    "english_title": "집으로...",
    "categories": [
      "剧情",
      "家庭"
    ],
    "region": "韩国",
    "duration": "80 分钟",
    "release_date": "2002-04-05 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 26,
    "cover": "https://p0.meituan.net/movie/c304c687e287c7c2f9e22cf78257872d277201.jpg@464w_644h_1e_1c",
    "chinese_title": "龙猫",
    "english_title": "となりのトトロ",
    "categories": [
      "动画",
      "冒险",
      "奇幻",
      "家庭"
    ],
    "region": "日本",
    "duration": "86 分钟",
    "release_date": "2018-12-14 上映",
    "score": 9.1,
    "stars": 4.75
  },
  {
    "id": 27,
    "cover": "https://p1.meituan.net/movie/4ffca83fd972f71e291f8ea8d78a4b58594878.jpg@464w_644h_1e_1c",
    "chinese_title": "七武士",
    "english_title": "七人の侍",
    "categories": [
      "剧情",
      "动作",
      "冒险"
    ],
    "region": "日本",
    "duration": "207 分钟",
    "release_date": "1954-04-26 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 28,
    "cover": "https://p1.meituan.net/movie/92198a6fc8c3f5d13aa1bdf203572c0f99438.jpg@464w_644h_1e_1c",
    "chinese_title": "美国往事",
    "english_title": "Once Upon a Time in America",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "意大利、美国",
    "duration": "229 分钟",
    "release_date": "2015-04-23 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 29,
    "cover": "https://p1.meituan.net/movie/30310858fdab34c7a17cfd7ec8ad8bfc112201.jpg@464w_644h_1e_1c",
    "chinese_title": "完美的世界",
    "english_title": "A Perfect World",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "美国",
    "duration": "138 分钟",
    "release_date": "1993-11-24 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 30,
    "cover": "https://p1.meituan.net/movie/b553d13f30100db731ab6cf45668e52d94703.jpg@464w_644h_1e_1c",
    "chinese_title": "上帝之城",
    "english_title": "Cidade de Deus",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "巴西、法国",
    "duration": "130 分钟",
    "release_date": "",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 31,
    "cover": "https://p0.meituan.net/movie/1433d81b10d116239dbbf02a06ac3c19265682.jpg@464w_644h_1e_1c",
    "chinese_title": "辩护人",
    "english_title": "변호인",
    "categories": [
      "剧情"
    ],
    "region": "韩国",
    "duration": "127 分钟",
    "release_date": "2013-12-18 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 32,
    "cover": "https://p0.meituan.net/movie/2d42e00d7ee59ff5bd574f93b8558aa726665.jpg@464w_644h_1e_1c",
    "chinese_title": "忠犬八公物语",
    "english_title": "ハチ公物語",
    "categories": [
      "剧情"
    ],
    "region": "日本",
    "duration": "107 分钟",
    "release_date": "1987-08-01 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 33,
    "cover": "https://p0.meituan.net/movie/eb2ea56996f21e7fb47b1a0736c7f177258901.jpg@464w_644h_1e_1c",
    "chinese_title": "海豚湾",
    "english_title": "The Cove",
    "categories": [
      "纪录片"
    ],
    "region": "美国",
    "duration": "92 分钟",
    "release_date": "2009-07-31 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 34,
    "cover": "https://p0.meituan.net/movie/3e5f5f3aa4b7e5576521e26c2c7c894d253975.jpg@464w_644h_1e_1c",
    "chinese_title": "英雄本色",
    "english_title": "A Better Tomorrow",
    "categories": [
      "剧情",
      "动作",
      "犯罪"
    ],
    "region": "中国香港",
    "duration": "95 分钟",
    "release_date": "2017-11-17 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 35,
    "cover": "https://p0.meituan.net/movie/1da0af2570fe697d38c4a37fdfded19b254936.jpg@464w_644h_1e_1c",
    "chinese_title": "恐怖直播",
    "english_title": "더 테러 라이브",
    "categories": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "region": "韩国",
    "duration": "97 分钟",
    "release_date": "2013-07-31 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 36,
    "cover": "https://p1.meituan.net/movie/a53a0200eba15ba483c905c872db9bf4331099.jpg@464w_644h_1e_1c",
    "chinese_title": "7号房的礼物",
    "english_title": "7번방의 선물",
    "categories": [
      "剧情",
      "喜剧",
      "家庭"
    ],
    "region": "韩国",
    "duration": "127 分钟",
    "release_date": "2013-01-23 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 37,
    "cover": "https://p0.meituan.net/movie/3985eaf3858bea0f2a3d966bf7ee2103178217.jpg@464w_644h_1e_1c",
    "chinese_title": "窃听风暴",
    "english_title": "Das Leben der Anderen",
    "categories": [
      "剧情",
      "悬疑"
    ],
    "region": "德国",
    "duration": "137 分钟",
    "release_date": "2006-03-23 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 38,
    "cover": "https://p0.meituan.net/movie/6d8491386d07cda91967a6fbbd0d0788294693.jpg@464w_644h_1e_1c",
    "chinese_title": "时空恋旅人",
    "english_title": "About Time",
    "categories": [
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "region": "英国",
    "duration": "123 分钟",
    "release_date": "2013-09-04 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 39,
    "cover": "https://p1.meituan.net/movie/d5970e36c8868a4b746c80f3b3f8a404174615.jpg@464w_644h_1e_1c",
    "chinese_title": "穿条纹睡衣的男孩",
    "english_title": "The Boy in the Striped Pajamas",
    "categories": [
      "剧情",
      "战争"
    ],
    "region": "英国、美国",
    "duration": "94 分钟",
    "release_date": "2008-08-28 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 40,
    "cover": "https://p0.meituan.net/movie/1199dc6273680f175fd9b06c9c36d08a219658.jpg@464w_644h_1e_1c",
    "chinese_title": "教父",
    "english_title": "The Godfather",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "美国",
    "duration": "175 分钟",
    "release_date": "2015-04-18 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 41,
    "cover": "https://p1.meituan.net/movie/4c55f3bf5fa9660db3cb7014651a0950267034.jpg@464w_644h_1e_1c",
    "chinese_title": "萤火之森",
    "english_title": "蛍火の杜へ",
    "categories": [
      "剧情",
      "爱情",
      "动画",
      "奇幻"
    ],
    "region": "日本",
    "duration": "45 分钟",
    "release_date": "2011-09-17 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 42,
    "cover": "https://p0.meituan.net/movie/19653e8af59cf473cd40f9ccc0658d93692304.jpg@464w_644h_1e_1c",
    "chinese_title": "素媛",
    "english_title": "소원",
    "categories": [
      "剧情"
    ],
    "region": "韩国",
    "duration": "123 分钟",
    "release_date": "2013-10-02 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 43,
    "cover": "https://p1.meituan.net/movie/135c612860fae899df2220149664d97a173555.jpg@464w_644h_1e_1c",
    "chinese_title": "小鞋子",
    "english_title": "بچههای آسمان",
    "categories": [
      "剧情",
      "家庭"
    ],
    "region": "伊朗",
    "duration": "89 分钟",
    "release_date": "",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 44,
    "cover": "https://p1.meituan.net/movie/2a0783b4fd95566568f24adfad2181bb5392280.jpg@464w_644h_1e_1c",
    "chinese_title": "熔炉",
    "english_title": "도가니",
    "categories": [
      "剧情"
    ],
    "region": "韩国",
    "duration": "125 分钟",
    "release_date": "2011-09-22 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 45,
    "cover": "https://p1.meituan.net/moviemachine/508056769092059fe43a611b949f27d14863831.jpg@464w_644h_1e_1c",
    "chinese_title": "大话西游之大圣娶亲",
    "english_title": "A Chinese Odyssey Part Two - Cinderella",
    "categories": [
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "region": "中国香港、中国大陆",
    "duration": "110 分钟",
    "release_date": "2014-10-24 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 46,
    "cover": "https://p1.meituan.net/movie/7833126c8c21a11571bb52fbdece0acb811449.jpg@464w_644h_1e_1c",
    "chinese_title": "新龙门客栈",
    "english_title": "New Dragon Gate Inn",
    "categories": [
      "动作",
      "爱情",
      "武侠",
      "古装"
    ],
    "region": "中国香港、中国大陆",
    "duration": "88 分钟",
    "release_date": "2012-02-24 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 47,
    "cover": "https://p1.meituan.net/movie/1e700e53e4fe29dd5942381bb353c8532239179.jpg@464w_644h_1e_1c",
    "chinese_title": "触不可及",
    "english_title": "Intouchables",
    "categories": [
      "剧情",
      "喜剧"
    ],
    "region": "法国",
    "duration": "112 分钟",
    "release_date": "2011-11-02 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 48,
    "cover": "https://p0.meituan.net/movie/bcbe59fc51580317adf94537a61a1a26142090.jpg@464w_644h_1e_1c",
    "chinese_title": "钢琴家",
    "english_title": "The Pianist",
    "categories": [
      "剧情",
      "音乐",
      "传记",
      "历史",
      "战争"
    ],
    "region": "法国、德国、英国、波兰",
    "duration": "150 分钟",
    "release_date": "2002-05-24 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 49,
    "cover": "https://p0.meituan.net/movie/2526f77c650bf7cf3d5ee2dccdeac332244951.jpg@464w_644h_1e_1c",
    "chinese_title": "本杰明·巴顿奇事",
    "english_title": "The Curious Case of Benjamin Button",
    "categories": [
      "剧情",
      "爱情",
      "奇幻"
    ],
    "region": "美国",
    "duration": "166 分钟",
    "release_date": "2008-12-25 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 50,
    "cover": "https://p1.meituan.net/movie/96d98200d2afb4b87ff189f9c15b6545568339.jpg@464w_644h_1e_1c",
    "chinese_title": "倩女幽魂",
    "english_title": "A Chinese Ghost Story",
    "categories": [
      "爱情",
      "奇幻",
      "武侠",
      "古装"
    ],
    "region": "中国香港",
    "duration": "98 分钟",
    "release_date": "2011-04-30 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 51,
    "cover": "https://p1.meituan.net/movie/bb0eca029cd25329776a4549b3fbe262924727.jpg@464w_644h_1e_1c",
    "chinese_title": "哈利·波特与死亡圣器（下）",
    "english_title": "Harry Potter and the Deathly Hallows: Part 2",
    "categories": [
      "剧情",
      "悬疑",
      "奇幻",
      "冒险"
    ],
    "region": "英国、美国",
    "duration": "130 分钟",
    "release_date": "2011-08-04 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 52,
    "cover": "https://p1.meituan.net/movie/0b0d45b58946078dd24d4945dd6be3b51329411.jpg@464w_644h_1e_1c",
    "chinese_title": "甜蜜蜜",
    "english_title": "Comrades: Almost a Love Story",
    "categories": [
      "剧情",
      "爱情"
    ],
    "region": "中国香港",
    "duration": "118 分钟",
    "release_date": "2015-02-13 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 53,
    "cover": "https://p0.meituan.net/movie/f7f4b4099773268f8290ed033f49dc01377512.jpg@464w_644h_1e_1c",
    "chinese_title": "蝙蝠侠：黑暗骑士崛起",
    "english_title": "The Dark Knight Rises",
    "categories": [
      "剧情",
      "动作",
      "科幻",
      "惊悚",
      "犯罪"
    ],
    "region": "美国、英国",
    "duration": "165 分钟",
    "release_date": "2012-08-27 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 54,
    "cover": "https://p0.meituan.net/movie/34f9202c5e823f490ffec4c69d5d0028137395.jpg@464w_644h_1e_1c",
    "chinese_title": "鬼子来了",
    "english_title": "Devils on the Doorstep",
    "categories": [
      "剧情",
      "战争"
    ],
    "region": "中国大陆",
    "duration": "139 分钟",
    "release_date": "2000-05-13 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 55,
    "cover": "https://p1.meituan.net/movie/70a574550c4bb928dcc6a40641294785150838.jpg@464w_644h_1e_1c",
    "chinese_title": "无敌破坏王",
    "english_title": "Wreck-It Ralph",
    "categories": [
      "喜剧",
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "美国",
    "duration": "101 分钟",
    "release_date": "2012-11-06 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 56,
    "cover": "https://p0.meituan.net/movie/83df1c541e6e0696e67ce7da81cb1e1a251258.jpg@464w_644h_1e_1c",
    "chinese_title": "致命魔术",
    "english_title": "The Prestige",
    "categories": [
      "剧情",
      "悬疑",
      "惊悚"
    ],
    "region": "美国、英国",
    "duration": "130 分钟",
    "release_date": "2006-10-17 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 57,
    "cover": "https://p0.meituan.net/movie/85c2bfba6025bfbfb53291ae5924c215308805.jpg@464w_644h_1e_1c",
    "chinese_title": "神偷奶爸",
    "english_title": "Despicable Me",
    "categories": [
      "喜剧",
      "动画",
      "冒险"
    ],
    "region": "美国、法国",
    "duration": "95 分钟",
    "release_date": "2010-06-20 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 58,
    "cover": "https://p0.meituan.net/movie/e71affe126eeb4f8bfcc738cbddeebc8288766.jpg@464w_644h_1e_1c",
    "chinese_title": "断背山",
    "english_title": "Brokeback Mountain",
    "categories": [
      "剧情",
      "爱情",
      "家庭"
    ],
    "region": "美国、加拿大",
    "duration": "134 分钟",
    "release_date": "2005-09-02 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 59,
    "cover": "https://p0.meituan.net/movie/15f1ac49b6d1ff7b71207672993ed6901536456.jpg@464w_644h_1e_1c",
    "chinese_title": "怦然心动",
    "english_title": "Flipped",
    "categories": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "region": "美国",
    "duration": "90 分钟",
    "release_date": "2010-07-26 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 60,
    "cover": "https://p0.meituan.net/movie/b0d97e4158b47d653d7a81d66f7dd3092146907.jpg@464w_644h_1e_1c",
    "chinese_title": "驯龙高手",
    "english_title": "How to Train Your Dragon",
    "categories": [
      "喜剧",
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "美国",
    "duration": "98 分钟",
    "release_date": "2010-05-14 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 61,
    "cover": "https://p0.meituan.net/movie/f9356a376358f1576da3263d998eca7a94624.jpg@464w_644h_1e_1c",
    "chinese_title": "飞屋环游记",
    "english_title": "Up",
    "categories": [
      "剧情",
      "喜剧",
      "动画",
      "冒险"
    ],
    "region": "美国",
    "duration": "96 分钟",
    "release_date": "2009-08-04 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 62,
    "cover": "https://p0.meituan.net/movie/2e383b5f5f306f10f9f26d9f1c28cf1d825537.jpg@464w_644h_1e_1c",
    "chinese_title": "黑客帝国3：矩阵革命",
    "english_title": "The Matrix Revolutions",
    "categories": [
      "动作",
      "科幻"
    ],
    "region": "美国、澳大利亚",
    "duration": "129 分钟",
    "release_date": "2003-11-05 上映",
    "score": 8.8,
    "stars": 4.75
  },
  {
    "id": 63,
    "cover": "https://p0.meituan.net/movie/845ce32778a1b3f258de089f91a3979b5766154.jpg@464w_644h_1e_1c",
    "chinese_title": "速度与激情5",
    "english_title": "Fast Five",
    "categories": [
      "动作",
      "犯罪"
    ],
    "region": "美国",
    "duration": "130 分钟",
    "release_date": "2011-05-12 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 64,
    "cover": "https://p1.meituan.net/movie/f8e9d5a90224746d15dfdbd53d4fae3d209420.jpg@464w_644h_1e_1c",
    "chinese_title": "勇敢的心",
    "english_title": "Braveheart",
    "categories": [
      "剧情",
      "动作",
      "传记",
      "历史",
      "战争"
    ],
    "region": "美国",
    "duration": "177 分钟",
    "release_date": "1995-05-18 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 65,
    "cover": "https://p1.meituan.net/movie/ca4a128a5a54d5b5e35ceba622636c831810197.jpg@464w_644h_1e_1c",
    "chinese_title": "三傻大闹宝莱坞",
    "english_title": "3 Idiots",
    "categories": [
      "剧情",
      "喜剧",
      "爱情",
      "歌舞"
    ],
    "region": "印度",
    "duration": "171 分钟",
    "release_date": "2011-12-08 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 66,
    "cover": "https://p1.meituan.net/movie/8d7b0b902afd4ec1a3dd7a9c6149463c187734.jpg@464w_644h_1e_1c",
    "chinese_title": "闻香识女人",
    "english_title": "Scent of a Woman",
    "categories": [
      "剧情"
    ],
    "region": "美国",
    "duration": "157 分钟",
    "release_date": "1992-12-23 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 67,
    "cover": "https://p1.meituan.net/movie/21b9211eb1094af360842472018db634286646.jpg@464w_644h_1e_1c",
    "chinese_title": "末代皇帝",
    "english_title": "The Last Emperor",
    "categories": [
      "剧情",
      "传记",
      "历史"
    ],
    "region": "英国、意大利、中国大陆、法国、美国",
    "duration": "163 分钟",
    "release_date": "1987-10-23 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 68,
    "cover": "https://p0.meituan.net/movie/4f9638ba234c3fb673f23a09968db875371576.jpg@464w_644h_1e_1c",
    "chinese_title": "风之谷",
    "english_title": "風の谷のナウシカ",
    "categories": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "日本",
    "duration": "117 分钟",
    "release_date": "",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 69,
    "cover": "https://p0.meituan.net/movie/396266d8b711958841b3536a3fa7b868211445.jpg@464w_644h_1e_1c",
    "chinese_title": "大话西游之月光宝盒",
    "english_title": "A Chinese Odyssey",
    "categories": [
      "喜剧",
      "爱情",
      "奇幻",
      "古装"
    ],
    "region": "中国香港、中国大陆",
    "duration": "87 分钟",
    "release_date": "2014-10-24 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 70,
    "cover": "https://p0.meituan.net/movie/70de97ebb6b5251ecb7c3f6d7a782a7f189340.jpg@464w_644h_1e_1c",
    "chinese_title": "放牛班的春天",
    "english_title": "Les choristes",
    "categories": [
      "剧情",
      "音乐"
    ],
    "region": "法国、德国、瑞士",
    "duration": "97 分钟",
    "release_date": "2004-10-16 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 71,
    "cover": "https://p1.meituan.net/movie/7d1d85610651dbe1c8687781a87d1008184950.jpg@464w_644h_1e_1c",
    "chinese_title": "当幸福来敲门",
    "english_title": "The Pursuit of Happyness",
    "categories": [
      "剧情",
      "家庭",
      "传记"
    ],
    "region": "美国",
    "duration": "117 分钟",
    "release_date": "2008-01-17 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 72,
    "cover": "https://p0.meituan.net/movie/a08f65e6cb50fab32df5da69ff116f593095363.jpg@464w_644h_1e_1c",
    "chinese_title": "幽灵公主",
    "english_title": "もののけ姫",
    "categories": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "日本",
    "duration": "134 分钟",
    "release_date": "1998-05-01 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 73,
    "cover": "https://p0.meituan.net/movie/df15efd261060d3094a73ef679888d4f238149.jpg@464w_644h_1e_1c",
    "chinese_title": "十二怒汉",
    "english_title": "12 Angry Men",
    "categories": [
      "剧情"
    ],
    "region": "美国",
    "duration": "96 分钟",
    "release_date": "1957-04-13 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 74,
    "cover": "https://p0.meituan.net/movie/b3defc07dfaa1b6f5b74852ce38a3f8f242792.jpg@464w_644h_1e_1c",
    "chinese_title": "搏击俱乐部",
    "english_title": "Fight Club",
    "categories": [
      "剧情",
      "动作",
      "悬疑",
      "惊悚"
    ],
    "region": "美国、德国",
    "duration": "139 分钟",
    "release_date": "1999-09-10 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 75,
    "cover": "https://p1.meituan.net/movie/bc022b86345c643ca21d759166f77a553679589.jpg@464w_644h_1e_1c",
    "chinese_title": "疯狂原始人",
    "english_title": "The Croods",
    "categories": [
      "喜剧",
      "动画",
      "冒险"
    ],
    "region": "美国",
    "duration": "98 分钟",
    "release_date": "2013-04-20 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 76,
    "cover": "https://p1.meituan.net/movie/e540384dc6c9f63bdb27cc554588a77f44305.jpg@464w_644h_1e_1c",
    "chinese_title": "阿凡达",
    "english_title": "Avatar",
    "categories": [
      "动作",
      "科幻",
      "冒险"
    ],
    "region": "美国、英国",
    "duration": "162 分钟",
    "release_date": "2010-01-04 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 77,
    "cover": "https://p0.meituan.net/movie/0127b451d5b8f0679c6f81c8ed414bb2432442.jpg@464w_644h_1e_1c",
    "chinese_title": "哈尔的移动城堡",
    "english_title": "ハウルの動く城",
    "categories": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "日本",
    "duration": "119 分钟",
    "release_date": "2004-09-05 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 78,
    "cover": "https://p1.meituan.net/movie/d40efe1183f29d5900f5c60be3c8a89d339225.jpg@464w_644h_1e_1c",
    "chinese_title": "盗梦空间",
    "english_title": "Inception",
    "categories": [
      "剧情",
      "科幻",
      "悬疑",
      "冒险"
    ],
    "region": "美国、英国",
    "duration": "148 分钟",
    "release_date": "2010-09-01 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 79,
    "cover": "https://p0.meituan.net/movie/5f0a709378d6b567807aa9685610f818282136.jpg@464w_644h_1e_1c",
    "chinese_title": "忠犬八公的故事",
    "english_title": "Hachi: A Dog&#x27;s Tale",
    "categories": [
      "剧情"
    ],
    "region": "美国、英国",
    "duration": "93 分钟",
    "release_date": "2009-06-13 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 80,
    "cover": "https://p1.meituan.net/movie/a2a287c77415dc1f85b04d288f7d63ab1089754.jpg@464w_644h_1e_1c",
    "chinese_title": "拯救大兵瑞恩",
    "english_title": "Saving Private Ryan",
    "categories": [
      "剧情",
      "历史",
      "战争"
    ],
    "region": "美国",
    "duration": "169 分钟",
    "release_date": "1998-11-13 上映",
    "score": 8.9,
    "stars": 4.75
  },
  {
    "id": 81,
    "cover": "https://p0.meituan.net/movie/4c41068ef7608c1d4fbfbe6016e589f7204391.jpg@464w_644h_1e_1c",
    "chinese_title": "活着",
    "english_title": "To Live",
    "categories": [
      "剧情",
      "家庭",
      "历史"
    ],
    "region": "中国大陆、中国香港",
    "duration": "132 分钟",
    "release_date": "1994-05-17 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 82,
    "cover": "https://p0.meituan.net/movie/267dd2483f0fb57081474c00fbea38451415571.jpg@464w_644h_1e_1c",
    "chinese_title": "机器人总动员",
    "english_title": "WALL·E",
    "categories": [
      "喜剧",
      "科幻",
      "动画"
    ],
    "region": "美国",
    "duration": "98 分钟",
    "release_date": "2008-06-27 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 83,
    "cover": "https://p0.meituan.net/movie/76fc92cfa6c8f2959431b8aa604ef7ae126414.jpg@464w_644h_1e_1c",
    "chinese_title": "天堂电影院",
    "english_title": "Nuovo Cinema Paradiso",
    "categories": [
      "剧情",
      "爱情"
    ],
    "region": "意大利、法国",
    "duration": "155 分钟",
    "release_date": "1988-11-17 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 84,
    "cover": "https://p0.meituan.net/movie/02bb9fd161c05bad6089133098efcdb5546589.jpg@464w_644h_1e_1c",
    "chinese_title": "指环王2：双塔奇兵",
    "english_title": "The Lord of the Rings: The Two Towers",
    "categories": [
      "剧情",
      "动作",
      "奇幻",
      "冒险"
    ],
    "region": "美国、新西兰",
    "duration": "179 分钟",
    "release_date": "2003-04-25 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 85,
    "cover": "https://p1.meituan.net/movie/dd08154878aac7c8c649fe3eeb8ccd0a2498277.jpg@464w_644h_1e_1c",
    "chinese_title": "指环王1：护戒使者",
    "english_title": "The Lord of the Rings: The Fellowship of the Ring",
    "categories": [
      "剧情",
      "动作",
      "奇幻",
      "冒险"
    ],
    "region": "新西兰、美国",
    "duration": "178 分钟",
    "release_date": "2002-04-04 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 86,
    "cover": "https://p0.meituan.net/movie/86c5190ba1d1236093c13f2fe9ed8dd4150050.jpg@464w_644h_1e_1c",
    "chinese_title": "射雕英雄传之东成西就",
    "english_title": "The Eagle Shooting Heroes",
    "categories": [
      "喜剧",
      "奇幻",
      "武侠",
      "古装"
    ],
    "region": "中国香港",
    "duration": "113 分钟",
    "release_date": "1993-02-05 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 87,
    "cover": "https://p0.meituan.net/movie/09658109acfea0e248a63932337d8e6a4268980.jpg@464w_644h_1e_1c",
    "chinese_title": "蝙蝠侠：黑暗骑士",
    "english_title": "The Dark Knight",
    "categories": [
      "剧情",
      "动作",
      "科幻",
      "惊悚",
      "犯罪"
    ],
    "region": "美国、英国",
    "duration": "152 分钟",
    "release_date": "2008-07-14 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 88,
    "cover": "https://p0.meituan.net/movie/606de8f394d40dbcbb9b87943fec71a2130408.jpg@464w_644h_1e_1c",
    "chinese_title": "无间道",
    "english_title": "Infernal Affairs",
    "categories": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "region": "中国香港",
    "duration": "101 分钟",
    "release_date": "2003-09-05 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 89,
    "cover": "https://p0.meituan.net/movie/bb1dee5e0b25889a2410211c1d5010ae190824.jpg@464w_644h_1e_1c",
    "chinese_title": "教父2",
    "english_title": "The Godfather: Part Ⅱ",
    "categories": [
      "剧情",
      "犯罪"
    ],
    "region": "美国",
    "duration": "202 分钟",
    "release_date": "1974-12-12 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 90,
    "cover": "https://p0.meituan.net/movie/b05b94b28eca53f325ae8d807fcd4ce01798036.jpg@464w_644h_1e_1c",
    "chinese_title": "加勒比海盗",
    "english_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "categories": [
      "动作",
      "奇幻",
      "冒险"
    ],
    "region": "美国",
    "duration": "143 分钟",
    "release_date": "2003-11-21 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 91,
    "cover": "https://p0.meituan.net/movie/d66b56b77b55aa3da5987b68948444c9106742.jpg@464w_644h_1e_1c",
    "chinese_title": "哈利·波特与魔法石",
    "english_title": "Harry Potter and the Sorcerer&#x27;s Stone",
    "categories": [
      "奇幻",
      "冒险"
    ],
    "region": "美国、英国",
    "duration": "152 分钟",
    "release_date": "2002-01-26 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 92,
    "cover": "https://p0.meituan.net/movie/932bdfbef5be3543e6b136246aeb99b8123736.jpg@464w_644h_1e_1c",
    "chinese_title": "指环王3：王者无敌",
    "english_title": "The Lord of the Rings: The Return of the King",
    "categories": [
      "剧情",
      "动作",
      "奇幻",
      "冒险"
    ],
    "region": "美国、新西兰",
    "duration": "201 分钟",
    "release_date": "2004-03-15 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 93,
    "cover": "https://p1.meituan.net/movie/ad974d3527879f00be2eec29135118163728582.jpg@464w_644h_1e_1c",
    "chinese_title": "黑客帝国",
    "english_title": "The Matrix",
    "categories": [
      "动作",
      "科幻"
    ],
    "region": "美国、澳大利亚",
    "duration": "136 分钟",
    "release_date": "2000-01-14 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 94,
    "cover": "https://p1.meituan.net/movie/6a964e9cee699267053bd6a4bf6f2671195394.jpg@464w_644h_1e_1c",
    "chinese_title": "剪刀手爱德华",
    "english_title": "Edward Scissorhands",
    "categories": [
      "剧情",
      "爱情",
      "奇幻"
    ],
    "region": "美国",
    "duration": "105 分钟",
    "release_date": "1990-12-06 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 95,
    "cover": "https://p0.meituan.net/movie/ae7245920d95c03765fe1615f3a1fe3865785.jpg@464w_644h_1e_1c",
    "chinese_title": "春光乍泄",
    "english_title": "Happy Together",
    "categories": [
      "剧情",
      "爱情"
    ],
    "region": "中国香港、日本、韩国",
    "duration": "96 分钟",
    "release_date": "1997-05-17 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 96,
    "cover": "https://p1.meituan.net/movie/14a7b337e8063e3ce05a5993ed80176b74208.jpg@464w_644h_1e_1c",
    "chinese_title": "大闹天宫",
    "english_title": "The Monkey King",
    "categories": [
      "动画",
      "奇幻"
    ],
    "region": "中国大陆",
    "duration": "114 分钟",
    "release_date": "1965-12-31 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 97,
    "cover": "https://p1.meituan.net/movie/ba1ed511668402605ed369350ab779d6319397.jpg@464w_644h_1e_1c",
    "chinese_title": "天空之城",
    "english_title": "天空の城ラピュタ",
    "categories": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "region": "日本",
    "duration": "125 分钟",
    "release_date": "1992-05-01 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 98,
    "cover": "https://p0.meituan.net/movie/ef6d7e040278f3d727306745e8df1af5246411.jpg@464w_644h_1e_1c",
    "chinese_title": "音乐之声",
    "english_title": "The Sound of Music",
    "categories": [
      "剧情",
      "爱情",
      "歌舞",
      "传记"
    ],
    "region": "美国",
    "duration": "174 分钟",
    "release_date": "1965-03-02 上映",
    "score": 9.0,
    "stars": 4.75
  },
  {
    "id": 99,
    "cover": "https://p0.meituan.net/movie/b0d986a8bf89278afbb19f6abaef70f31206570.jpg@464w_644h_1e_1c",
    "chinese_title": "辛德勒的名单",
    "english_title": "Schindler&#x27;s List",
    "categories": [
      "剧情",
      "历史",
      "战争"
    ],
    "region": "美国",
    "duration": "195 分钟",
    "release_date": "1993-11-30 上映",
    "score": 9.5,
    "stars": 4.75
  },
  {
    "id": 100,
    "cover": "https://p0.meituan.net/movie/58782fa5439c25d764713f711ebecd1e201941.jpg@464w_644h_1e_1c",
    "chinese_title": "魂断蓝桥",
    "english_title": "Waterloo Bridge",
    "categories": [
      "剧情",
      "爱情",
      "战争"
    ],
    "region": "美国",
    "duration": "108 分钟",
    "release_date": "1940-05-17 上映",
    "score": 9.5,
    "stars": 4.75
  }
];
