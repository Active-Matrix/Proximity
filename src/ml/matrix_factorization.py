import tensorflow as tf
from tensorflow.keras.layers import Embedding # type: ignore

class MatrixFactorization(tf.keras.Model):
  def __init__(self, n_users, n_news, embed_dim):
    super(MatrixFactorization, self).__init__()

    self.user_embed = Embedding(n_users, embed_dim)
    self.news_embed = Embedding(n_news, embed_dim)

  def call(self, user, news):

    user_embedding = self.user_embed(user)
    news_embedding = self.news_embed(news)
    
    return self.user_embed, self.news_embed, tf.reduce_sum(user_embedding * news_embedding, axis=1)
