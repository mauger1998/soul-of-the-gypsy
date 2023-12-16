export function formatText(text) {
	if (!text.includes('\n')) {
		return [{ paragraph: text }]
	}

	const lines = text.split('\n')
	const nonEmptyLines = lines.filter((line) => line.trim() !== '')
	const formattedLines = nonEmptyLines.map((line) => ({ paragraph: line }))
	return formattedLines
}
