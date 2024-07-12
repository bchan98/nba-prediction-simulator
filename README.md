# NBA Prediction Simulator

This project is a machine learning model that predicts the win/loss outcome of an NBA game, given two teams. This project is available as a Jupyter Notebook, and as a web application. The web application uses Next.js for the front-end and Flask for the backend. You can access the webapp at the following link: 

ballersim.app

If you'd like to run this web application locally, you can retrieve the docker images for the web servers with these commands:

```
docker pull bmkchan/nba-prediction-simulator_frontend:v0.1
docker pull bmkchan/nba-prediction-simulator_backend:v0.1
```

After which you'll just need to modify the docker-compose file found in this repository to be able to the run docker-compose up command. Additionally, a link to the hosted Jupyter notebook is posted below:

https://colab.research.google.com/drive/1rhVaOQxDPIYi5PsQ4DgFIpwfpiH5u0pt?usp=sharing

This simulator implements a random forest classifier and uses a set of 8 predictors to predict the outcome of an NBA game. The machine learning model is trained on the '22 and '23 season of the NBA, playoffs included - the data was obtained from Kaggle.com from this link: https://www.kaggle.com/datasets/nathanlauga/nba-games - much thanks to Nathan Lauga. To make predictions on the outcomes of games, the notebook pulls statistics from the official NBA Stats API to obtain the predictors needed, before feeding them into the machine learning model to be predicted.

To be clear - this is not financial advice to make/take bets on the outcome of games. This is simply a project written for entertainment.


Why write this?

![a5f](https://github.com/bchan98/nba-prediction-simulator/assets/89050093/010a1ffa-7c43-405a-a48f-6976defb4e3d)


To-do list:
- ~~Implement a front-facing webpage rather than using the jupyter notebook as an interface~~ - done!
- Pull live NBA data rather than using a .csv obtained from Kaggle to train the model
- Provide an API that can respond to requests directly sent to the web server.
- Implement a similar machine learning model that will predict the outcome of MLB games
