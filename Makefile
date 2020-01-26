release:
	pipenv run python -m staticsite build
	rm README.md
	mv docs/* .
