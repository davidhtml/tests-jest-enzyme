const book = {
    title: 'Ego',
    name: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin',
    }
}



const {name: PublisherName = 'Self-publised'} = book.publisher;


console.log(PublisherName);
