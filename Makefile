release:
	git checkout development
	git push origin development
	git checkout master
	git merge development
	pipenv run python -m staticsite build
	rm README.md
	mv docs/* .
