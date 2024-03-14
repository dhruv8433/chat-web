import axios from "axios";
import { ARTICLE_KEY } from "../config/config";

export async function getArticals(topic) {
  const resposne = await axios
    .get(
      `https://newsapi.ai/api/v1/article/getArticles?action=getArticles&keyword=${topic}&articlesPage=1&articlesCount=100&articlesSortBy=date&articlesSortByAsc=false&articlesArticleBodyLen=-1&resultType=articles&dataType[]=news&dataType[]=pr&apiKey=${ARTICLE_KEY}&forceMaxDataTimeWindow=31`
    )
    .then((response) => response.data);

  return resposne;
}
