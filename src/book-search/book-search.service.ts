import  fetchUrl from './../shared/fetchUrl/fetchUrl';

export async function getBooksByType(type: string) {
    try {
        const bookInfo =  await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });

        const volumeInfo = bookInfo &&  bookInfo.items &&bookInfo.items.map((item: any) => item.volumeInfo);
        return volumeInfo;
    } catch(exception) {
        return [];

    }
}

