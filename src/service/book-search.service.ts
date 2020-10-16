import  fetchUrl from './../shared/fetchUrl/fetchUrl';

export async function getBooksByType(type: string) {
    try {
        const bookInfo =  await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });

        console.log(bookInfo);
        const volumeInfo = bookInfo &&  bookInfo.items &&bookInfo.items.map((item: any) => {
            const bookDetails =item.volumeInfo;
            bookDetails.id=item.id;
            return bookDetails;
        });
        return volumeInfo;
    } catch(exception) {
        return [];

    }
}

