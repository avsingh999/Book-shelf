import axios from 'axios';

export function getBooks(
    limit=10,
    start=0,
    order='asc',
    list = ''
){
    const request = axios.get(`http://localhost:5001/api/books?limit=${limit}&skip=${start}&order=${order}`)
                        .then(response =>{
                            if(list){
                                return[...list,...response.data]
                            }
                            else{
                                return response.data
                            }
                        } )
    return{
        type:'GET_BOOKS',
        payload:request
    }
}


export function getBookWReviewer(id){
    console.log(id)
    const request = axios.get(`http://localhost:5001/api/getBook?id=${id}`)
    
    return (dispatch) => {
        request.then(({data})=>{
            let book = data;
            axios.get(`http://localhost:5001/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer:data
                }
                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function clearBookWReviewer(){
    return{
        type:"CLEAR_BOOK_W_REVIEWER",
        payload:{
            book:{},
            reviewer:{}
        }

    }
}
