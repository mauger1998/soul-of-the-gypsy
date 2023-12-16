export function formatTitle(title) {
	const words = title.split(' ')
	const lastWord = words.pop()
	const titleWithItalicLastWord = [...words, `<span>${lastWord}</span>`].join(' ')
	return titleWithItalicLastWord
}

export function formatSubtitle(subtitle) {
	const words = subtitle.split(' ')
	if (words.length < 2) {
		return subtitle
	}
	words[1] = `<span>${words[1]}</span>`
	const subtitleWithItalicSecondWord = words.join(' ')
	return subtitleWithItalicSecondWord
}
