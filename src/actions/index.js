/**
 * Created by luis on 16/12/2016.
 */
export function selectBook(book) {
    // select book is an action creator it needs to return an action - an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}