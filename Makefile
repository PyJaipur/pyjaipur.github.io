release:
	pipenv run python -m staticsite build
	cp -r docs/* .
merge:
	git checkout development
	git push origin development
	git checkout master
	git merge development --squash
