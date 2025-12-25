export const calculateYears=(startDate,endDate)=>{
    if(!startDate || !endDate) return 0 

    const start = new Date(startDate)
    const end = new Date(endDate)

    if(end<start) return 0
    const diffInMs = end-start

    const years = diffInMs / (1000*60*60*24*365)

    return Number(years.toFixed(1))

}