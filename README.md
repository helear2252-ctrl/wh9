# DIC 電影資訊 - Scrape Center Complete Data

本工作區收录了从 [Scrape Center (https://ssr1.scrape.center/)](https://ssr1.scrape.center/) 爬取并整理的全部电影数据（共 100 部）。

## 数据文件说明

为了方便不同场景下的使用，数据已被整理为以下三种格式：

1. **Excel 表格 (包含嵌入大图海报)**：[movies.xlsx](file:///c:/Users/admin/Desktop/DIC%20%E9%9B%BB%E5%BD%B1%E8%B3%87%E8%A8%8A/movies.xlsx)  
   *适合本地查看和离线办公，每行均已嵌入对应的电影海报大图缩略图。*
2. **CSV 数据文件**：[movies.csv](file:///c:/Users/admin/Desktop/DIC%20%E9%9B%BB%E5%BD%B1%E8%B3%87%E8%A8%8A/movies.csv)  
   *适合程序处理、数据库导入以及数据分析。*
3. **Markdown 预览文档**：[movies.md](file:///c:/Users/admin/Desktop/DIC%20%E9%9B%BB%E5%BD%B1%E8%B3%87%E8%A8%8A/movies.md)  
   *方便在 IDE 中直接进行快速预览完整表格。*

---

## 电影数据预览 (前 10 部)

关于全部 100 部电影的完整表格，请查看 **[movies.md](file:///c:/Users/admin/Desktop/DIC%20%E9%9B%BB%E5%BD%B1%E8%B3%87%E8%A8%8A/movies.md)**。

| ID | 海报 | 中文名称 | 英文名称 | 电影类型 | 国家/地区 | 电影时长 | 上映日期 | 评分 | 星级 (满分5) |
| :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| 1 | <img src='https://p0.meituan.net/movie/ce4da3e03e655b5b88ed31b5cd7896cf62472.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **霸王别姬** | Farewell My Concubine | 剧情, 爱情 | 中国内地、中国香港 | 171 分钟 | 1993-07-26 上映 | ⭐ **9.5** | 4.75 |
| 2 | <img src='https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **这个杀手不太冷** | Léon | 剧情, 动作, 犯罪 | 法国 | 110 分钟 | 1994-09-14 上映 | ⭐ **9.5** | 4.75 |
| 3 | <img src='https://p0.meituan.net/movie/283292171619cdfd5b240c8fd093f1eb255670.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **肖申克的救赎** | The Shawshank Redemption | 剧情, 犯罪 | 美国 | 142 分钟 | 1994-09-10 上映 | ⭐ **9.5** | 4.75 |
| 4 | <img src='https://p1.meituan.net/movie/b607fba7513e7f15eab170aac1e1400d878112.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **泰坦尼克号** | Titanic | 剧情, 爱情, 灾难 | 美国 | 194 分钟 | 1998-04-03 上映 | ⭐ **9.5** | 4.75 |
| 5 | <img src='https://p0.meituan.net/movie/289f98ceaa8a0ae737d3dc01cd05ab052213631.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **罗马假日** | Roman Holiday | 剧情, 喜剧, 爱情 | 美国 | 118 分钟 | 1953-08-20 上映 | ⭐ **9.5** | 4.75 |
| 6 | <img src='https://p0.meituan.net/movie/da64660f82b98cdc1b8a3804e69609e041108.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **唐伯虎点秋香** | Flirting Scholar | 喜剧, 爱情, 古装 | 中国香港 | 102 分钟 | 1993-07-01 上映 | ⭐ **9.5** | 4.75 |
| 7 | <img src='https://p0.meituan.net/movie/223c3e186db3ab4ea3bb14508c709400427933.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **乱世佳人** | Gone with the Wind | 剧情, 爱情, 历史, 战争 | 美国 | 238 分钟 | 1939-12-15 上映 | ⭐ **9.5** | 4.75 |
| 8 | <img src='https://p0.meituan.net/movie/1f0d671f6a37f9d7b015e4682b8b113e174332.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **喜剧之王** | The King of Comedy | 剧情, 喜剧, 爱情 | 中国香港 | 85 分钟 | 1999-02-13 上映 | ⭐ **9.5** | 4.75 |
| 9 | <img src='https://p0.meituan.net/movie/8959888ee0c399b0fe53a714bc8a5a17460048.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **楚门的世界** | The Truman Show | 剧情, 科幻 | 美国 | 103 分钟 | 暂无数据 | ⭐ **9.0** | 4.75 |
| 10 | <img src='https://p0.meituan.net/movie/27b76fe6cf3903f3d74963f70786001e1438406.jpg@464w_644h_1e_1c' width='100' alt='cover'> | **狮子王** | The Lion King | 动画, 歌舞, 冒险 | 美国 | 89 分钟 | 1995-07-15 上映 | ⭐ **9.0** | 4.75 |

*完整列表请打开 [movies.md](file:///c:/Users/admin/Desktop/DIC%20%E9%9B%BB%E5%BD%B1%E8%B3%87%E8%A8%8A/movies.md) 查看。*
