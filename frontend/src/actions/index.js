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
            console.log(book.ownerId)
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


export function loginUser({email,password}){
    const request = axios.post('http://localhost:5001/api/login',{email,password}, {withCredentials: true})
                    .then( response => response.data)
    return {
        type:'USER_LOGIN',
        payload:request

    }
}


export function auth(){
    const request = axios.get('http://localhost:5001/api/auth',{withCredentials: true})
                        .then( response => response.data)

    return {
        type:'USER_AUTH',
        payload:request

    }  
}

export function addBook(book){
    console.log(book)
        const request = axios.post('http://localhost:5001/api/book',{...book})
                            .then( response => response.data)
    return {
        type:'ADD_BOOK',
        payload:request

    }  
}

export function clearNewBook(){
    return {
        type:'CLEAR_NEWBOOK',
        payload:{}

    }  
}

export function getUserPost(userId){
    const request = axios.get(`http://localhost:5001/api/user_posts?user=${userId}`)
                    .then( response => response.data)
                    // console.log(request)
    return {
        type:'GET_USER_POST',
        payload:request
    }  
}
export function getBook(id){
    console.log(id)
    const request = axios.get(`http://localhost:5001/api/getBook?id=${id}`)
    
                    .then(response => response.data)

        return {
            type:'GET_BOOK',
            payload:request
        }
}

export function updateBook(data){
    console.log(data)
    const request = axios.post(`http://localhost:5001/api/book_update`,{...data})
                    .then(response => response.data)

        return {
            type:'UPDATE_BOOK',
            payload:request
        }
}

export function deleteBook(id){
    const request = axios.delete(`http://localhost:5001/api/delete_book?id=${id}`)
                    .then(response => response.data)
        
        return {
            type:'DELETE_BOOK',
            payload:request
        }
}


export function clearBook(id){

        
        return {
            type:'CLEAR_BOOK',
            payload:{
                book:null,
                updateBook:false,
                postDeleted:false
            }
        }
}


export function getUsers(){
    const request = axios.get(`http://localhost:5001/api/users`)
                    .then(response => response.data)

        return {
            type:'GET_USER',
            payload:request
        }
}

export function userRegister(user, userList){
    const request = axios.post(`http://localhost:5001/api/register`,user)

        return (dispatch) => {
            request.then(({data})=>{
                let user = data.success ? [...userList, data.user] : userList
                let response = {
                    success:data.success,
                    user
                }
                dispatch({
                    type:'USER_REGISTER',
                    payload:response
                })
            })
        }
}