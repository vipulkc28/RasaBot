# RasaBot


Frontend
Step to run Rasa UI

1. clone code from git/bitbucket
2. Go to project folder name using command cd RasaBot/RasaUI
3. Run npm install
4. Run np start

Backend
Setting up your environment:-

1. Python Environment Setup
	Check if your Python environment is already configured:
	python3 --version
	pip3 --version 

2. If not python is not install on system And if python are installed go to step 3
	for Window system:-
   		pip3 install -U pip
   	
   	for macOS system:-
   		brew update
		brew install python

	for Ubuntu system:-
		sudo apt update
		sudo apt install python3-dev python3-pip

3. Virtual Environment Setup
 	Create a new virtual environment by choosing a Python interpreter and making a ./venv directory to hold it.
 	for macOS/Ubuntu system:-
 		python3 -m venv ./venv
 		source ./venv/bin/activate (Activate the virtual environment:)

	for Window system:-
		C:\> python3 -m venv ./venv
		C:\> .\venv\Scripts\activate (Activate the virtual environment:)

4. Install Rasa
	pip3 install -U pip
	pip3 install rasa


To Run rasa project
Steps:-
1. clone code from git/bitbucket
2. Go to project folder name using command cd RasaBot/rasa-demo
3. for macOS/Ubuntu system:-
 		python3 -m venv ./venv
 		source ./venv/bin/activate (Activate the virtual environment:)

	for Window system:-
		C:\> python3 -m venv ./venv
		C:\> .\venv\Scripts\activate (Activate the virtual environment:)
4. Run command on terminal :- rasa train
5. rasa run --enable-api --cors "*"
6. open one more terminal and in that terminal follow above step 2, step3
7. Run :- python app.py
