export default defineEventHandler( (e)=>{
    const {query}=getQuery(e)
    // console.log(query)
    const config=useRuntimeConfig()
    // console.log(config);
    const res=$fetch(`${config.public.apiBaseUrl}/products`,{
        method:'GET',
        // headers:{
        //     'Authorization':`Bearer ${config.apiKey}`,
        // }
    })
    return res;
})