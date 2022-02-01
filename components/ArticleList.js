import styles from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'
const ArtcleList = (articles) => {
  return (
    <div className={styles.grid}>
       {articles.map((article)=>{
        <ArticleItem article={article}/>
      })}
    </div>
  )
}

export default ArtcleList
