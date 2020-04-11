export const formatSize = size => {
	if (!size) {
		return "-";
	}
	if (size === "SMALL") {
		return "Malý";
	}
	if (size === "MEDIUM") {
		return "Stredný";
	}
	return "Veľký";
};

export const formatGender = gender => {
	if (!gender) {
		return "-";
	}
	if (gender === "MALE") {
		return "Samcek";
	}
	return "Samicka";
};

export const formatYears = year => {
	if (!year) {
		return "-";
	}
	if (year === 0) {
		return "Šteňa";
	}
	if (year === 1) {
		return `${year} rok`;
	}
	if (year >= 5) {
		return `${year} rokov`;
	}
	return `${year} roky`;
};
