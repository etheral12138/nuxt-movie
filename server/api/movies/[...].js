export default defineEventHandler((e)=>{
    const {query}=getQuery(e)
    const config=useRuntimeConfig()
    return $fetch(`${config.apiBaseUrl}/search/movie?${id}`,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${config.apiKey}`,
        }
    })
})