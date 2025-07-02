export const renderBooks = books => {
	return books.reduce(
		(a, { book_image, title, price, author }) =>
			(a += `
    <li>
        <img
            src="${book_image}"
            alt="${title}"
        />
        <h3>${title}</h3>
        <p class="price">$${price}</p>
        <p class="author">${author}</p>
        <button class="btn">Learn More</button>
    </li>`),
		""
	)
}
