import Layout from "../../components/Layout"
import { search } from "../api"

export default function News({ results }) {
    return(
      <Layout>
        <h1>Results from the search: {results.query}</h1>
        <ul>
            {results.map(result => {
              return(<li key={result.uri}><a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a></li>)
            })}
        </ul>
      </Layout>
    )
}

// to register for a new New York Times API KEY, visit :
const API_KEY = 'hVkDaAOlBfRH4ijNaPJGVJZEkfcRUoQY'
export async function getServerSideProps({  params }) {
  const results = await search(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
  )
  return { props: { results } }

}
