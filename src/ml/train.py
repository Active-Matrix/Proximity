import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

import tensorflow as tf
import pandas as pd
import json
from matrix_factorization import MatrixFactorization
from tensorflow.keras.optimizers import Adam # type: ignore
from tensorflow.keras.losses import MeanSquaredError # type: ignore
from sklearn.model_selection import train_test_split

def train_step(model, loss_fn, user_optimizer, news_optimizer, user, news, rating):

    with tf.GradientTape() as user_tape, tf.GradientTape() as news_tape:

        user_embedding, news_embedding, pred = model(user, news)
        loss = loss_fn(rating, pred)

    user_grad = user_tape.gradient(loss, user_embedding.trainable_variables)
    news_grad = news_tape.gradient(loss, news_embedding.trainable_variables)
    user_optimizer.apply_gradients(zip(user_grad, user_embedding.trainable_variables))
    news_optimizer.apply_gradients(zip(news_grad, news_embedding.trainable_variables))
    return loss, pred

ms = json.load(open('model specs.json'))
ratings = pd.read_csv('ratings.csv')
ratings_tr, ratings_ts = train_test_split(ratings, test_size=0.2)
n_user = ms['n_user']
n_news = ms['n_news']
epoch = 100
batchsize = 32
embed_dim = ms['embed_dim']

user_optimizer = Adam(learning_rate=0.01)
news_optimizer = Adam(learning_rate=0.01)
lossOBJ = MeanSquaredError()


dataset = tf.data.Dataset.from_tensor_slices((ratings_tr.user_id, 
                                              ratings_tr.news_id, 
                                              ratings_tr.rating))
dataset.shuffle(10000)
dataset = dataset.batch(batchsize)

validation = tf.data.Dataset.from_tensor_slices((ratings_ts.user_id, 
                                                 ratings_ts.news_id, 
                                                 ratings_ts.rating))
validation = validation.batch(1)

recommendation_model = MatrixFactorization(n_users=n_user,
                                           n_news=n_news,
                                           embed_dim=embed_dim)


for i in range(epoch):
    for X_user, X_news, X_rating in dataset:
        loss_tr, pred = train_step(recommendation_model, lossOBJ, 
                                user_optimizer, news_optimizer, 
                                X_user, X_news, X_rating)
    # if i % 10 == 0:
    #     for Y_user, Y_news, Y_rating in validation:
    #         _, _, predicted = recommendation_model(Y_user, Y_news)
    #         loss_val = lossOBJ(Y_rating, predicted)
    #     print(f"Epoch: {i}, Train loss: {loss_tr}, Test loss: {loss_val}")

recommendation_model.save_weights('rm_weights.weights.h5')
