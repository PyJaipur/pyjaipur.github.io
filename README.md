![PyJaipurLogo](https://github.com/PyJaipur/pyjaipur.github.io/blob/master/images/logo-white.png?raw=True) 

 
## Official website for [PyJaipur](https://pyjaipur.github.io) - Python Jaipur User Group.

## Developing locally

1. Please fork https://github.com/PyJaipur/pyjaipur.github.io to your own account
2. ```bash
   git clone https://github.com/<MyFork>/pyjaipur.github.io
   cd pyjaipur.github.io
   pipenv install --dev --deploy
   pipenv run python -m staticsite build
   ```
3. To run the site any one of these will work.
    - Site will be built to `docs/` folder. You can open the `index.html` file to see.
    - `pipenv run python -m http.server` can serve the website at http://localhost:8000
