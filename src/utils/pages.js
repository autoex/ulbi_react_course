export const getPagesCount =(totalCount, limit)=> {
    return Math.ceil(totalCount / limit)

};

export const getPagesArray =(pagesCount)=> {
    let arr = [];
    for (let i = 1; i< pagesCount; i++) {
        arr.push(i)
    }
    return arr
}