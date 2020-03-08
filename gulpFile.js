/* eslint-disable */
const gulp = require("gulp");
const sort = require("gulp-sort");
const scanner = require("i18next-scanner");
const config = require("./i18next-scanner.config");

gulp.task("watch-translate", () => {
	gulp.watch("src/**/*.{js,ts,tsx,jsx}", () => {
		return gulp
			.src(["src/**/*.{js,ts,tsx,jsx}"])
			.pipe(sort())
			.pipe(scanner(config.options))
			.pipe(gulp.dest("./"));
	});
});
