import {useParams} from "react-router";

const books = {
    bk2023:{ title:'FastAPI를 사용한 파이썬 웹 개발',author:'압둘라지즈 압둘라지즈 아데시나',price:'18000',pubdate:'2023-03-22'},
    bk0307:{ title:'리얼 도쿄 [2023~2024년 최신판]',author:'양미석',price:'18900',pubdate:'2023-03-13'}
}
const BookDetail = () => {
    const {id} =useParams();
    const book = books[id]
    return (
        <div>
            <h2>Book Detail</h2>
            <p>{book.title}</p>
            <p>{book.author} {book.pubdate} {book.price}</p>
        </div>
    )
}


export default BookDetail;