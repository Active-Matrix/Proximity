import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

import pandas as pd
import json
from matrix_factorization import MatrixFactorization
import tensorflow as tf

ms = json.load(open('model specs.json'))
n_user = ms['n_user']
n_news = ms['n_news']
embed_dim = ms['embed_dim']
recommendation_model = MatrixFactorization(n_users=n_user,
                                           n_news=n_news,
                                           embed_dim=embed_dim)

recommendation_model.load_weights('rm_weights.weights.h5')


sparse_matrix = pd.read_csv('sparse matrix.csv')
Y_user = sparse_matrix.loc[sparse_matrix.rating == 0].reset_index()['user_id']
Y_news = sparse_matrix.loc[sparse_matrix.rating == 0].reset_index()['news_id']
_, _, ratings = recommendation_model(Y_user, Y_news)
ratings = tf.cast(tf.round(ratings), tf.int64)

i = 0
ratings__ = sparse_matrix.rating.to_numpy()
for ix, rx in enumerate(ratings__):
    if rx == 0 : 
        ratings__[ix] = ratings[i]
        i += 1

sparse_matrix.rating = ratings__
sparse_matrix.to_csv('sparse matrix.csv')
