This is the initial project for a betting simulator that predicts NBA games. This will be developed with Python for the notebook, and Typescript and React for the front-end.

This project is currently hosted at google colab, and can be accessed by this link:  https://colab.research.google.com/drive/1rhVaOQxDPIYi5PsQ4DgFIpwfpiH5u0pt?usp=sharing
If you'd like to run this notebook locally, you can download the .ipynb and the .csv files in this repository.

This simulator implements a random forest classifier and uses a set of 8 predictors to predict the outcome of an NBA game. The machine learning model is trained on the '22 and '23 season of the NBA, playoffs included - the data was obtained from Kaggle.com from this link: https://www.kaggle.com/datasets/nathanlauga/nba-games - much thanks to Nathan Lauga. To make predictions on the outcomes of games, the notebook pulls statistics from the official NBA Stats API to obtain the predictors needed, before feeding them into the machine learning model to be predicted.

To be clear - this is not financial advice to make/take bets on the outcome of games. This is simply a project written for entertainment.

To-do list:
- Implement a front-facing webpage rather than using the jupyter notebook as an interface
- Pull live NBA data rather than using a .csv obtained from Kaggle to train the model
- Provide an API that can respond to requests directly sent to the web server.
